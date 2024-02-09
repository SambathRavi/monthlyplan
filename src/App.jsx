import './App.css';


function Plan({plan,price,children}){
  return(
        <div style={{height:'60%',width:'250px',backgroundColor:'#fff',borderRadius:'1rem',display :'flex',flexDirection:'column',alignItems:'center',padding:'1rem'}} >
          <small>{plan}</small>
          <h1>${price}/monthly</h1>
          <hr/>
          {children}
          <div style={{width:'100%'}} ><button style={{width:'100%',backgroundColor:'#00f',outline:'none',border:'none',padding:'1rem',borderRadius:'5px',color:'#fff',fontSize:'1rem',fontWeight:'bold'}}>Submit</button></div>
        </div>
  )
}

function Planlist({children}){
  return(
  <div style={{display:'flex',flexGrow:1, flexDirection:'column',justifyContent:'start'}}>
           {children}
  </div>
  )
}

function List({icon,children}){
  return(
    <>
     <div style={{display:'flex',alignItems:'center',columnGap:'.5rem'}}>
      <span>{icon}</span>
           <h4 style={{padding:0,margin:'.5rem'}}>{children}</h4>
  </div>
    </>
  )
}


function App() {

  return (
      <div style={{display:'flex',height:'100dvh',justifyContent:'center',alignItems:'center',backgroundColor:'#00f',columnGap:'1rem' }} >
        <Plan plan={'free'} price={'0'} >
          <Planlist>
            <List icon={<i className="bi bi-check"></i>}>Single User</List>
            <List icon={<i className="bi bi-check"></i>}>50gb storage</List>
            <List icon={<i className="bi bi-check"></i>}>unlimited public probject</List>
            <List icon={<i className="bi bi-x"></i>}>community access</List>
            <List icon={<i className="bi bi-x"></i>}>unlimited Private project</List>
            <List icon={<i className="bi bi-x"></i>}>Phone support</List>
            <List icon={<i className="bi bi-x"></i>}>Sub Domain</List>
          </Planlist>
          </Plan>
        <Plan plan={'plus'} price={'9'}> 
          <Planlist>
          <List icon={<i className="bi bi-check"></i>}>Single User</List>
            <List icon={<i className="bi bi-check"></i>}>50gb storage</List>
            <List icon={<i className="bi bi-check"></i>}>unlimited public probject</List>
            <List icon={<i className="bi bi-check"></i>}>community access</List>
            <List icon={<i className="bi bi-check"></i>}>unlimited Private project</List>
            <List icon={<i className="bi bi-x"></i>}>Phone support</List>
            <List icon={<i className="bi bi-x"></i>}>Sub Domain</List>
          </Planlist>
          </Plan>
        <Plan plan={'pro'} price={'49'}>
          <Planlist>
          <List icon={<i className="bi bi-check"></i>}>Single User</List>
            <List icon={<i className="bi bi-check"></i>}>50gb storage</List>
            <List icon={<i className="bi bi-check"></i>}>unlimited public probject</List>
            <List icon={<i className="bi bi-check"></i>}>community access</List>
            <List icon={<i className="bi bi-check"></i>}>unlimited Private project</List>
            <List icon={<i className="bi bi-check"></i>}>Phone support</List>
            <List icon={<i className="bi bi-check"></i>}>Sub Domain</List>
          </Planlist>
          </Plan>
      </div>
  );
}

export default App;