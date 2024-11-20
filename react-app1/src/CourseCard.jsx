function CourseCard({data :{name , description}}) {
  return (
    <div>
     <h4>{name}</h4>
     <p>{description}</p>
    </div>
  )
}

export default CourseCard