// import React, {Component} from 'react'
// import Filter from './Filter';

// let filterHolder=[];
// class  Home extends Component {
//     state={
//         Jobs:[],
//         Items:[{name:"Nwafor", email:"Gmail"}]
//     };
//     componentDidMount(){

//         fetch ("/data.json")
//             .then((response)=>response.json())
//             .then((response)=>{
//                 console.log(response)
//                 this.setState({Jobs:response})
//                 console.log("State", this.state)
//             })
//             .catch((error)=>{
//                 console.log("Error getting data:", error)
//             });
//     }
//     handleClick =(item)=>{
//         document.querySelector(".filter-holder").style.visibility="visible";
//         if (!filterHolder.includes(item)){
//             filterHolder.push(item)
//             const items= [...this.state.Items,item]
//             console.log(filterHolder,"ashuasvasv")
//             this.setState({
//                 Items:items
//             })
//             console.log(this.state.Items, "This is the Item state")
//         }
        
        
        

//     }
//     handleClear=()=>{
//         document.querySelector(".filter-holder").style.visibility="hidden"
//         document.querySelector(".filter-main").innerHTML=""
//     }
//   render(){
//     const {Jobs, Items}= this.state;
//     const items= Items.length ? (Items.map(item=>{
//         return(
//             <div className="filter-main" key={Math.random()}>
//                     <div className="filter-body" id={item}>
//                         <div className="filter-title" ><span>{item}</span></div>
//                         <div className="filter-close"><span onClick={()=>{handleCloseBtn(item)}}><i className="bi bi-x-square-fill">xx</i></span></div>
//                      </div>
//             </div>
//         )})) :null;
//     const jobs =Jobs.length ? (
//         Jobs.map(job=>{
//             return(
//                 <div className="main-item shadow" key={job.id}>
//                     <div className="job">
//                         <div className="image-holder"><img src={job.logo} alt="" /></div>
//                         <div className="job-body">
//                             <div className="company-name">
//                                 <div><span className='name1'>{job.company}</span></div>
//                                 <div>{job.new === false && (<span className='name1'>NEW!</span>)}</div>
//                                 <div>{job.new === true && (<span className='name2'>NEW!</span>)}</div>
//                                 <div>{job.feature === false && (<span className='name1'>feature</span>)}</div>
//                                 <div>{job.new === false && (<span className='name3'>feature</span>)}</div>
//                             </div>
//                             <div className="job-title"><h3>{job.position}</h3></div>
//                             <div className="more-info">
//                                 <span className='info1'>{job.postedAt}</span>
//                                 <span className='info2'>{job.contract}</span>
//                                 <span className='info3'>{job.location}</span>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="skills">
//                         {job.tools.map((item)=>(
//                           <span className='item' onClick={()=>{this.handleClick(item)}} key={Math.random()}>{item}</span>  
//                     ))}
//                         {job.languages.map((item)=>(
//                           <span className='item' onClick={()=>{this.handleClick(item)}} key={Math.random()}>{item}</span>  
//                             ))}
//                     </div>
//                 </div>
//             )

//         })

//     ) : (
//         <div className="alert alert-danger" role="alert">
//             A simple danger alert—check it out!
//         </div>
//     )
//     return (
//       <>
//         <div className="main-section">
//             <div className="section-body">
//                 <div className="header"></div>
//                 <div className="container">
//                     <div className="filter-holder">
//                         {/* Filters will be poplates here */}
//                         <div className="clear" onClick={this.handleClear}><span>Clear</span></div>
//                     </div>
//                     <div className="main-body">
//                         {jobs}
//                     </div>
//                 </div>
//             </div>
//         </div>
//       </>
//     )
//   }
//   }
 

// export default Home
