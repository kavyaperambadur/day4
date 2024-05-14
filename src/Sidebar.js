function Sidebar(){
    // const h = "home";
        
    return(
        <div

        style={{
            display: "flex",
            marginBottom: "15px",
            width:"24",
            height:"10",
            align : "left",
            margin:"0",
            height:"100px",
            width:"25px",
            // position: "fixed",
            padding: "10px 15px"

          }}
          
        >
            <img
          style={{
            height: "30%",
          }}
          src="https://cdn-icons-png.flaticon.com/128/1946/1946488.png"
          alt="Home"
        />
        <div>
            <h3>Home</h3>
        </div>


        </div>
        
        
    )
}

export default Sidebar;