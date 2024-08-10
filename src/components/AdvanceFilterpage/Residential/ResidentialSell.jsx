import React ,{useState,useEffect}from 'react'
import MinMaxRange from '../minMaxRange'

const ResidentialSell = ({selectedName, handleAdvanceKey, handleButtonClick,handleMinMaxOption ,setChildMinValue,setChildMaxValue,handleCoverArea,covered }) => {

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
                        <li className='list-group-item' name="processing_status" value={selectedName} onClick={handleAdvanceKey}>Possession Status</li>
                        <li className='list-group-item' name="property_type" value={selectedName} onClick={handleAdvanceKey}>Sub property type</li>
                        <li className='list-group-item' name='sale_type' onClick={handleAdvanceKey}>Sale Type</li> 
                        <li className='list-group-item' name='posted_since' onClick={handleAdvanceKey}>Posted Since</li> 
                        <li className='list-group-item' name="posted_by" value={selectedName} onClick={handleAdvanceKey}>Posted By</li>
                        <li className='list-group-item' name='ownership_details' onClick={handleAdvanceKey}>Ownership</li>
                     
                    
                        <li className='list-group-item' name='furnishing_status' onClick={handleAdvanceKey}>Furnishing</li> 
                        <li className='list-group-item' name="amanities" value={selectedName} onClick={handleAdvanceKey}>Amenities</li>
                        <li className='list-group-item' name='varify_properties' onClick={handleAdvanceKey}>Varify properties</li> 
                        
                        <li className='list-group-item' name='facing' onClick={handleAdvanceKey}>Facing</li> 
                        <li className='list-group-item' name="floor_no" value={selectedName} onClick={handleAdvanceKey}>Floor</li>
                        <li className='list-group-item' name='bathroom' onClick={handleAdvanceKey}>Bathroom</li> 
                        <li className='list-group-item' name="offer_properties" value={selectedName} onClick={handleAdvanceKey}>Properties With offer</li>
                        <li className='list-group-item' name='exclusive' onClick={handleAdvanceKey}>MB exclusive properties</li> 
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
                    {selectedName==='processing_status' &&(<div  >
                        <span>Possession Status</span>
                        <div className='mb-3' style={{display:'flex', flexWrap:'wrap'}}>
                          <button class="btn btn-outline-secondary btn-sm me-2" value='completed' onClick={handleButtonClick}>Completed</button>
                          <button class="btn btn-outline-secondary btn-sm me-2" value='under-construction' onClick={handleButtonClick}>Under Construction</button>
                          
                        </div>
                        
                      </div>
                    )}
                    {selectedName==='property_type' &&( <div>
                        <span>Sub property type</span>
                        <div style={{display:'flex', flexWrap:'wrap'}}>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='multi-story-appartment' onClick={handleButtonClick}>Multi story appartment</button>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='Builder-floor' onClick={handleButtonClick}>Builder floor appartment</button>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='penthouse' onClick={handleButtonClick}>Penthouse</button>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='Studio-appartment' onClick={handleButtonClick}>Studio Appartment</button>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='service-appt' onClick={handleButtonClick}>Service Appartment</button>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='villa' onClick={handleButtonClick}>Villa</button>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='residential' onClick={handleButtonClick}>Residential House</button>
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
                    {selectedName==='furnishing_status' &&( <div>
                        <span>Furnishing</span>
                        <div style={{display:'flex', flexWrap:'wrap'}}>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='furnished' onClick={handleButtonClick}>Furnished</button>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='semi-furnished' onClick={handleButtonClick}>Semi-furnished</button>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='UnFurnished' onClick={handleButtonClick}>Un-furnished</button>
                    
                        </div>
                        
                      </div>
                    )}
                    {selectedName==='amanities' &&( <div>
                        <span>Amanities</span>
                        <div style={{display:'flex', flexWrap:'wrap'}}>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='reserved-parking' onClick={handleButtonClick}>Reserved Parking</button>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='lift' onClick={handleButtonClick}>Lift</button>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='power-backup' onClick={handleButtonClick}>Power Backup</button>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='park' onClick={handleButtonClick}>Park</button>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='play-area' onClick={handleButtonClick}>Kids play area</button>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='gym' onClick={handleButtonClick}>Gymnasium</button>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='swimming-pool' onClick={handleButtonClick}>Swimming pool</button>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='club-house' onClick={handleButtonClick}>Club house</button>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='vastu' onClick={handleButtonClick}>Vastu</button>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='ac' onClick={handleButtonClick}>Air Conditioned</button>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='internet' onClick={handleButtonClick}>Internet/Wi-Fi </button>
                        
                    
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
                    {selectedName==='floor_no' &&( <div>
                        <span>Floor</span>
                        <div style={{display:'flex', flexWrap:'wrap'}}>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='basement' onClick={handleButtonClick}>Basement</button>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='ground' onClick={handleButtonClick}>Ground</button>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='1-4' onClick={handleButtonClick}>1-4</button>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='5-8' onClick={handleButtonClick}>5-8</button>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='9-12' onClick={handleButtonClick}>9-12</button>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='13-16' onClick={handleButtonClick}>13-16</button>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='16' onClick={handleButtonClick}>16+</button>
                    
                        </div>
                        
                      </div>
                    )}
                    {selectedName==='bathroom' &&( <div>
                        <span>Bathroom</span>
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
                    {selectedName==='offer_properties' &&( <div>
                        <span>Properties With offer</span>
                        <div style={{display:'flex', flexWrap:'wrap'}}>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='yes' onClick={handleButtonClick}>Yes</button>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='np' onClick={handleButtonClick}>No</button>
                        
                        </div>
                        
                      </div>
                    )}
                    {selectedName==='exclusive' &&( <div>
                        <span>MB exclusive properties</span>
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

export default ResidentialSell
