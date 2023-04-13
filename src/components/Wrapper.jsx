

const Wrapper = ({children}) => {

  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: "grey",
      padding: "50px"
    }}>
      { children }

    </div>
  )
}

export default Wrapper