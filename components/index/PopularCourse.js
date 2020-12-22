import Image from 'next/image'


const PopularCourse  = ()  => {

  return(
    <>
<div className="popularCourse">

<div>
<span>Python</span>
<Image
        src="/img/svgimg.png"
        alt="Picture of the author"
       width={300}
        height={200}
      />
</div>

</div>
<style jsx>{`
.popularCourse{
  width:100%;height:150px;
}

.popularCourse 

`}</style>
</>
  )
}

export default PopularCourse;