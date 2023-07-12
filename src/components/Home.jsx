import React, {Component} from 'react'
import { connect } from 'react-redux';
import { addFilter, removeFilter,cearFilter } from '../filterReducer';
import { addJobs, filterJobWithTag,undoFilters } from '../jobReducer';


let clickedTags=[];
class  Home extends Component {
    componentDidMount() {
        fetch("/data.json")
          .then((response) => response.json())
          .then((data) => {
            localStorage.setItem("Jobs", JSON.stringify(data));
            this.props.undoFilters(data) // Dispatch action to set jobs data
          })
          .catch((error) => {
            console.log("Error getting data:", error);
          });
      }

    handleClick =(item)=>{
        document.querySelector(".filter-holder").style.visibility="visible";
        const newJob=[];
        this.props.Jobs.forEach((job)=>{
            if(job.tools.includes(item) | job.languages.includes(item)){
                newJob.push(job)
                
            }
        })
        if (!this.props.Filters.includes(item)){
            this.props.addFilter(item);
            clickedTags.push(item)
            this.props.filterJobWithTag(newJob);//this filters the the job as the tags are being clicked
        }

    }
    handleClear=()=>{
        document.querySelector(".filter-holder").style.visibility="hidden"
        this.props.undoFilters(JSON.parse(localStorage.getItem("Jobs")))
        this.props.cearFilter();
        
    }
    handleRemoveFilter=(item)=>{
        // Here, the clicked tags are removed from the clickTags array. 
        let initJobState = JSON.parse(localStorage.getItem("Jobs"));//save the initial job into this variable.
        let newJobState=[]//This array will store the jobs whose tags are contained in the clickTags array
        if (this.props.Filters.includes(item)){
            this.props.removeFilter(item);
            clickedTags=clickedTags.filter(function(letter){
                return letter !==item;
            })
            if (!clickedTags.length == 0){
                clickedTags.forEach((e)=>{
                    initJobState.forEach((jobObject)=>{
                        console.log(clickedTags.length,"Length1111")
                        if(jobObject.tools.includes(e) | jobObject.languages.includes(e) & !newJobState.includes(jobObject)){
                            newJobState.push(jobObject)
                            console.log("Hello testting newstate")
                        }
                    })
                })

            }else{
                document.querySelector(".filter-holder").style.visibility="hidden"//Close the filter pannel if the clickTag array is empty
                newJobState=initJobState
            }
            this.props.undoFilters(newJobState)       

        }
    }

    handleRemoveFliterHoder=()=>{
        if(this.props.Filters.length ===0){
            document.querySelector(".filter-holder").style.visibility="hidden"
            console.log("Yes")
        }
    }
  render(){
    console.log(this.props.Filters)
    const { Filters, Jobs } = this.props;

    const filterItems = Filters.length ? (
      Filters.map(item => (
        <div className="filter-main" key={Math.random()}>
          <div className="filter-body">
            <div className="filter-title"><span>{item}</span></div>
            <div className="filter-close"><span><i className="bi bi-x-square-fill" onClick={()=>this.handleRemoveFilter(item)}></i></span></div>
          </div>
        </div>
      ))
    ) : null;
    const jobs =Jobs.length ? (
        Jobs.map(job=>{
            return(
                <div className="main-item shadow" key={job.id}>
                    <div className="job">
                        <div className="image-holder"><img src={job.logo} alt="" /></div>
                        <div className="job-body">
                            <div className="company-name">
                                <div><span className='name1'>{job.company}</span></div>
                                <div>{job.new === false && (<span className='name1'>NEW!</span>)}</div>
                                <div>{job.new === true && (<span className='name2'>NEW!</span>)}</div>
                                <div>{job.feature === false && (<span className='name1'>feature</span>)}</div>
                                <div>{job.new === false && (<span className='name3'>feature</span>)}</div>
                            </div>
                            <div className="job-title"><h3>{job.position}</h3></div>
                            <div className="more-info">
                                <span className='info1'>{job.postedAt}</span>
                                <span className='info2'>{job.contract}</span>
                                <span className='info3'>{job.location}</span>
                            </div>
                        </div>
                    </div>
                    <div className="skills">
                        {job.tools.map((item)=>(
                          <span className='item' onClick={()=>{this.handleClick(item)}} key={Math.random()}>{item}</span>  
                    ))}
                        {job.languages.map((item)=>(
                          <span className='item' onClick={()=>{this.handleClick(item)}} key={Math.random()}>{item}</span>  
                            ))}
                    </div>
                </div>
            )

        })

    ) : (
        <div className="alert alert-danger" role="alert">
            A simple danger alert—check it out!
        </div>
    )
    return (
      <>
        <div className="main-section">
            <div className="section-body">
                <div className="header"></div>
                <div className="container">
                    <div className="filter-holder">
                        <div className="filter-main">
                             {filterItems}
                        </div>
                        <div className="clear" onClick={this.handleClear}><span>Clear</span></div>
                    </div>
                    <div className="main-body">
                        {jobs}
                    </div>
                </div>
            </div>
        </div>
      </>
    )
  }
  }

  const mapStateToProps = state => ({
    Jobs: state.Jobs,
    Filters: state.Filters,
  });
  const mapDispatchToProps = {
    addFilter,
    removeFilter,
    addJobs,
    cearFilter,
    filterJobWithTag,
    undoFilters,
  };
  export default connect(mapStateToProps,mapDispatchToProps)(Home);
