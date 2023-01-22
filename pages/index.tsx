// import Head from 'next/head'
import Image from 'next/image'
import christmas from "../images/christmas.jpg";
import styles from '../styles/Home.module.css'

export default function Home() {
  let maxSize:number=10;
  let minSize:number=5;
  let list:any[]=[]
  const createBlock=()=>{
    for(let i=0;i<50;i++){
      const block=<span
      className={styles.block}
      key={i}
      style={{width:`${Math.random()*(maxSize-minSize)+minSize+"px"}`,
      height:`${Math.random()*(maxSize-minSize)+minSize+"px"}`,
      top:`${Math.random()*100+"%"}`,
      left:`${Math.random()*100+"%"}`,
      animationDelay:`${Math.random()*1+"s"}`,
      backgroundColor:`rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`
      }}
      >
      </span>
      list.push(block)
    }
    return list;
  }
  createBlock();
  return (
    <div className={styles.container}>
      <div className={styles.imgWrap}>
        <Image src={christmas} alt="" />
      </div>
      <div className={styles.title}>CHRISTMAS SEASON</div>
      {list}
    </div>
  )
}
