import CourseCard from "./CourseCard";

function CourseList(){
    const courses = [
        {id:1 , name: "React", description:"This is React Course"},
        {id:2 , name : "Js" , description:"This is Js Course"},
        {id:3 , name: "Next" , description:"This is Next Course"},
        {id:4 , name : "Node" , description:"This is Node Course"},
    ];

    return(
        <div>
            <h3>CourseList</h3>
           <ul>
            {courses.map((course)=>
                ( <CourseCard key={course.id} data={course}/>
                ))}
           </ul>
        </div>
    )
}
export default CourseList;