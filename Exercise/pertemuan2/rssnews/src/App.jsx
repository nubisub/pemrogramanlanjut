import './App.css'
import {useEffect, useState} from "react";

const SOURCE = 'https://www.vice.com/id/rss?locale=id_id'
const SOURCE1 = 'https://lapi.kumparan.com/v2.0/rss/'
const SOURCE2 = 'https://www.cnnindonesia.com/ekonomi/rss'

function  App() {

    const [data, setData] = useState([]);
    const [data1, setData1] = useState([]);
    const [data2, setData2] = useState([]);
    const [data3, setData3] = useState([]);
    const[isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let array = [data, data1, data2];
        setData3(array);
        setIsLoading(false);
    },[data, data1, data2])

    let parser = new DOMParser();

    const inputData = async (response) => {
        let i =0;
        let title = response.getElementsByTagName('title')[i + 1].innerHTML
        title = title.replace('<![CDATA[','')
        title = title.replace(']]>','')
        let link = response.getElementsByTagName('link')[i + 1].innerHTML
        let description = response.getElementsByTagName('description')[i + 1].innerHTML
        description= description.replace('<![CDATA[','')
        description = description.replace(']]>','')
        let pubDate = response.getElementsByTagName('pubDate')[i + 1].innerHTML
        //get enclosure
        let image = response.getElementsByTagName('enclosure')[i].getAttribute('url')
        let item = {
            title,
            link,
            description,
            pubDate,
            image
        }
        setData(item)
        return item;
    }

    const inputData1 = async (response) => {
        let i =2;
        let title = response.getElementsByTagName('title')[i + 1].innerHTML
        title = title.replace('<![CDATA[','')
        title = title.replace(']]>','')
        let link = response.getElementsByTagName('link')[i + 1].innerHTML
        let description = response.getElementsByTagName('description')[i ].innerHTML
        description= description.replace('<![CDATA[','')
        description = description.replace(']]>','')
        let pubDate = response.getElementsByTagName('pubDate')[i + 1].innerHTML
        //get enclosure
        let image = response.getElementsByTagName('enclosure')[i-1].getAttribute('url')
        let item = {
            title,
            link,
            description,
            pubDate,
            image
        }
        setData1(item)
        return item
    }

    const inputData2= async (response) => {
        let i =4;
        let title = response.getElementsByTagName('title')[i + 1].innerHTML
        title = title.replace('<![CDATA[','')
        title = title.replace(']]>','')
        let link = response.getElementsByTagName('link')[i + 1].innerHTML
        let description = response.getElementsByTagName('description')[i ].innerHTML
        description= description.replace('<![CDATA[','')
        description = description.replace(']]>','')
        description = description.replace(/<.*>/,'')
        description
        let pubDate = response.getElementsByTagName('pubDate')[i + 1].innerHTML
        //get enclosure
        let image = response.getElementsByTagName('enclosure')[i-1].getAttribute('url')
        let item = {
            title,
            link,
            description,
            pubDate,
            image
        }
        setData2(item)
        return item
    }

    useEffect(() => {


        const getData = async (src,lanjut)=>{
            let response = await fetch(src)
                .then(res => res.text())
                .then(res => parser.parseFromString(res, 'text/xml'))
            let tempData = await response
            let cob =  inputData(tempData)
            return cob
        }


        const getData1 = async (src)=>{
            let response = await fetch(src)
                .then(res => res.text())
                .then(res => parser.parseFromString(res, 'text/xml'))
            let tempData = await response
            let cob = await inputData1(tempData)
            return cob
        }

        const getData2 = async (src)=>{
            let response = await fetch(src)
                .then(res => res.text())
                .then(res => parser.parseFromString(res, 'text/xml'))
            let tempData = await response
            let cob = await inputData2(tempData)
            return cob
        }

        getData(SOURCE)
        getData1(SOURCE1)
        getData2(SOURCE2)




    },[])


  return (
    <div className="App  ">
        <div className="flex xl:flex-row flex-col  ">
            {data3 === [] ? <div>Loading...</div> : data3.map((data, index) => {
                return (
                    <a href={data.link} target="_blank" className="xl:w-[350px] w-[300px] h-[520px]  card  my-4 shadow-lg transition-all rounded hover:shadow-xl border-2 bg-gray-50 hover:bg-white border-0 mx-4 overflow-hidden">
                        <div className="h-[250px] bcg overflow-hidden" key={index}>
                            <img className="max-w-full max-h-full img overflow-hidden w-full h-full object-cover " src={data.image} alt=""/>
                        </div>
                        <div className="mx-4 text-left my-4 overflow-hidden">
                            <div className="title text-zinc-600 font-bold text-lg transition-all " key={index}>{data.title}</div>
                            <div  className="mt-2 text-zinc-500  overflow-hidden" key={index}>{data.description}</div>
                        </div>


                    </a>
                )
            })}
        </div>
    </div>
  )
}

export default App
