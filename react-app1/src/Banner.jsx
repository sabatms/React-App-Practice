function Banner(props) {
  const {titele ,description ,numOfstudent} =props
  return (
    <div>
     <hr />
     <h1>{titele}</h1>
     <p>{description}</p>
     <span>{numOfstudent}</span>
     <hr />
    </div>
  )
}

export default Banner