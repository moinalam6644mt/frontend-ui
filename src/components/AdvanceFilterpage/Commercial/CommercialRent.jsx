import React ,{useState,useEffect}from 'react'
import MinMaxRange from '../minMaxRange'

const CommercialRent = ({ selectedName, handleAdvanceKey, handleButtonClick,handleMinMaxOption ,setChildMinValue,setChildMaxValue,handleCoverArea,covered }) => {

  const [minData,setMinData]=useState(null);
  const [maxData,setMaxData]=useState(null)

  useEffect(()=>{
    setChildMinValue(minData)
    setChildMaxValue(maxData)
  },[minData,maxData])

  return (
    <>
        
                  <div style={{display:'inline-flex', background:'white', paddingTop:'5px',marginTop:'2px',position: 'absolute', right: '0',width: '700px',border: '1px solid #ddd',padding: '1rem', columnGap: '1rem'}}>
                    <div>
                      <ul className='list-group'>
                       
                        <li className='list-group-item' name='super_area' onClick={handleCoverArea}>Covered Area</li> 
                        <li className='list-group-item' name="cabin_room" value={selectedName} onClick={handleAdvanceKey}>Cabins</li>
                        <li className='list-group-item' name="cafeteria" value={selectedName} onClick={handleAdvanceKey}>Pentry/Cafeteria</li>
                        <li className='list-group-item' name="parking" value={selectedName} onClick={handleAdvanceKey}>Parking</li>
                        <li className='list-group-item' name="guru" value={selectedName} onClick={handleAdvanceKey}>Commercial Guru</li>
                        <li className='list-group-item' name='ownership_details' onClick={handleAdvanceKey}>Ownership</li>

                       
                        <li className='list-group-item' name='sale_type' onClick={handleAdvanceKey}>Sale Type</li> 
                        <li className='list-group-item' name='posted_since' onClick={handleAdvanceKey}>Posted Since</li> 
                        <li className='list-group-item' name="posted_by" value={selectedName} onClick={handleAdvanceKey}>Posted By</li>
                        <li className='list-group-item' name='furnishing_status' onClick={handleAdvanceKey}>Furnishing</li> 
                     
                        <li className='list-group-item' name='varify_properties' onClick={handleAdvanceKey}>Varify properties</li> 
                        <li className='list-group-item' name="images" value={selectedName} onClick={handleAdvanceKey}>photos & videos</li>
                        <li className='list-group-item' name='facing' onClick={handleAdvanceKey}>Facing</li> 
                      
                        <li className='list-group-item' name='washroom_no' onClick={handleAdvanceKey}>Number of Washroom</li> 
                        <li className='list-group-item' name="pre_leased" value={selectedName} onClick={handleAdvanceKey}>pre leased</li>
                       
                        <li className='list-group-item' name="certified_agents" value={selectedName} onClick={handleAdvanceKey}>Posted By Certified agents</li>
                        <li className='list-group-item' name="rera_property" value={selectedName} onClick={handleAdvanceKey}>RERA registered properties</li>
                        <li className='list-group-item' name="rera_agent" value={selectedName} onClick={handleAdvanceKey}>RERA registered agent</li>
                        

                      </ul>
                    </div>
                    <div>
                      
                    {covered === 'super_area' && (
                        <div>
                            <span>Covered Area</span>
                            <div style={{display:'flex', flexWrap:'wrap'}}>
                                <MinMaxRange handleMinMaxOption={handleMinMaxOption} setMinData={setMinData} setMaxData={setMaxData} handleButtonClick={handleButtonClick}/>
                            </div>
                        </div>
                    )}
                    
                    {selectedName==='cabin_room' &&(<div  >
                        <span>Cabins</span>
                        <div className='mb-3' style={{display:'flex', flexWrap:'wrap'}}>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='1' onClick={handleButtonClick}>1</button>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='2' onClick={handleButtonClick}>2 </button>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='3' onClick={handleButtonClick}>3</button>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='4' onClick={handleButtonClick}>4</button>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='5' onClick={handleButtonClick}>5 </button>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='6' onClick={handleButtonClick}>6</button>
                          
                        </div>
                        
                      </div>
                    )}
                    {selectedName==='cafeteria' &&(<div  >
                        <span>Pentry/Cafeteria</span>
                        <div className='mb-3' style={{display:'flex', flexWrap:'wrap'}}>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='dry' onClick={handleButtonClick}>Dry</button>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='wet' onClick={handleButtonClick}>Wet</button>
                        
                       
                          
                        </div>
                        
                      </div>
                    )}
                    {selectedName==='parking' &&(<div  >
                        <span>Parking</span>
                        <div className='mb-3' style={{display:'flex', flexWrap:'wrap'}}>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='1' onClick={handleButtonClick}>1</button>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='2' onClick={handleButtonClick}>2 </button>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='3' onClick={handleButtonClick}>3</button>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='4' onClick={handleButtonClick}>4</button>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='5' onClick={handleButtonClick}>5 </button>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='6' onClick={handleButtonClick}>6</button>
                       
                          
                        </div>
                        
                      </div>
                    )}
                    {selectedName==='guru' &&(<div  >
                        <span>Commercial Guru</span>
                        <div className='mb-3' style={{display:'flex', flexWrap:'wrap'}}>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='yes' onClick={handleButtonClick}>Yes</button>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='no' onClick={handleButtonClick}>No</button>
                       
                          
                        </div>
                        
                      </div>
                    )}
                    {selectedName==='ownership_details' &&( <div>
                        <span>Ownership</span>
                        <div style={{display:'flex', flexWrap:'wrap'}}>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='free_holding' onClick={handleButtonClick}>+Freehold</button>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='Lease_hold' onClick={handleButtonClick}>+Leasehold</button>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='attorney' onClick={handleButtonClick}>+Power of Attorney</button>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='co-operative' onClick={handleButtonClick}>+Co-operative society</button>
                    
                        </div>
                        
                      </div>
                    )}
                    {selectedName==='sale_type' &&( <div>
                        <span>Sale Type</span>
                        <div style={{display:'flex', flexWrap:'wrap'}}>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='new' onClick={handleButtonClick}>New</button>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='resale' onClick={handleButtonClick}>Resale</button>
                        </div>
                        
                      </div>
                    )}
                    {selectedName==='posted_since' &&( <div>
                        <span>Posted Since</span>
                        <div style={{display:'flex', flexWrap:'wrap'}}>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='all' onClick={handleButtonClick}>All</button>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='yesterday' onClick={handleButtonClick}>Yesterday</button>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='last-week' onClick={handleButtonClick}>Last Week</button>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='last-2-week' onClick={handleButtonClick}>Last 2 weeks</button>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='last-3-week' onClick={handleButtonClick}>last 3 weeks</button>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='last-month' onClick={handleButtonClick}>Last month</button>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='last-2-month' onClick={handleButtonClick}>Last 2 month</button>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='last-4-month' onClick={handleButtonClick}>Last 4 month</button>
                    
                        </div>
                        
                      </div>
                    )}
                    {selectedName==='posted_by' &&( <div>
                        <span>Posted By</span>
                        <div style={{display:'flex', flexWrap:'wrap'}}>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='owner' onClick={handleButtonClick}>+Owner</button>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='builder' onClick={handleButtonClick}>+Builder</button>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='agent' onClick={handleButtonClick}>+Agent</button>
                    
                        </div>
                        
                      </div>
                    )}
                   
                    
                   {selectedName==='furnishing_status' &&( <div>
                        <span>Furnishing</span>
                        <div style={{display:'flex', flexWrap:'wrap'}}>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='furnished' onClick={handleButtonClick}>Furnished</button>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='semi-furnished' onClick={handleButtonClick}>Semi-furnished</button>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='UnFurnished' onClick={handleButtonClick}>Un-furnished</button>
                    
                        </div>
                        
                      </div>
                    )}
                    
                    {selectedName==='varify_properties' &&( <div>
                        <span>Varify properties</span>
                        <div style={{display:'flex', flexWrap:'wrap'}}>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='yes' onClick={handleButtonClick}>Yes</button>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='no' onClick={handleButtonClick}>No</button>
                        </div>
                        
                      </div>
                    )}
                    {selectedName==='images' &&( <div>
                        <span>photos & videos</span>
                        <div style={{display:'flex', flexWrap:'wrap'}}>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='5' onClick={handleButtonClick}>Under process</button>
                        
                    
                        </div>
                        
                      </div>
                    )}
                    {selectedName==='facing' &&( <div>
                        <span>Facing</span>
                        <div style={{display:'flex', flexWrap:'wrap'}}>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='east' onClick={handleButtonClick}>East</button>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='north' onClick={handleButtonClick}>North </button>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='south' onClick={handleButtonClick}>South</button>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='west' onClick={handleButtonClick}>West</button>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='north-east' onClick={handleButtonClick}>North-East </button>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='south-east' onClick={handleButtonClick}>South-East</button>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='north-west' onClick={handleButtonClick}>North-West </button>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='south-west' onClick={handleButtonClick}>South-West</button>
                    
                        </div>
                        
                      </div>
                    )}
                    
                    {selectedName==='washroom_no' &&( <div>
                        <span>Number of Washroom</span>
                        <div style={{display:'flex', flexWrap:'wrap'}}>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='1' onClick={handleButtonClick}>1</button>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='2' onClick={handleButtonClick}>2 </button>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='3' onClick={handleButtonClick}>3</button>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='4' onClick={handleButtonClick}>4</button>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='5' onClick={handleButtonClick}>5 </button>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='6' onClick={handleButtonClick}>6</button>
                    
                        </div>
                        
                      </div>
                    )}
                    {selectedName==='pre_leased' &&( <div>
                        <span>Pre leased</span>
                        <div style={{display:'flex', flexWrap:'wrap'}}>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='yes' onClick={handleButtonClick}>Yes</button>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='np' onClick={handleButtonClick}>No</button>
                        
                        </div>
                        
                      </div>
                    )} 
                    
                    
                    {selectedName==='certified_agents' &&( <div>
                        <span>Posted By Certified agents</span>
                        <div style={{display:'flex', flexWrap:'wrap'}}>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='yes' onClick={handleButtonClick}>Yes</button>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='np' onClick={handleButtonClick}>No</button>
                        
                        </div>
                        
                      </div>
                    )} 
                    {selectedName==='rera_property' &&( <div>
                        <span>RERA registered properties</span>
                        <div style={{display:'flex', flexWrap:'wrap'}}>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='yes' onClick={handleButtonClick}>Yes</button>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='np' onClick={handleButtonClick}>No</button>
                        
                        </div>
                        
                      </div>
                    )}
                    {selectedName==='rera_agent' &&( <div>
                        <span>RERA registered agent</span>
                        <div style={{display:'flex', flexWrap:'wrap'}}>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='yes' onClick={handleButtonClick}>Yes</button>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='np' onClick={handleButtonClick}>No</button>
                        
                        </div>
                        
                      </div>
                    )}
                    </div>
                    </div>
                
    </>
  )
}

export default CommercialRent
