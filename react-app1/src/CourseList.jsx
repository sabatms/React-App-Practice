function CourseList(){
    const courses = ["React" , "javascript" ,"Next" , "Node"];

    return(
        <div>
            <h3>CourseList</h3>
           <ul>
            {courses.map((course,index)=>
                (<li key={index}>{course}</li>
                ))}
           </ul>
        </div>
    )
}
export default CourseList;