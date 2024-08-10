import React from 'react'

const AgricultureSell = ({ selectedName, selectedValue, handleAdvanceKey, handleButtonClick }) => {
  return (
    <>
        
                  <div style={{display:'inline-flex', background:'white', paddingTop:'5px',marginTop:'2px',position: 'absolute', right: '0',width: '700px',border: '1px solid #ddd',padding: '1rem', columnGap: '1rem'}}>
                    <div>
                      <ul className='list-group'>
                       
                        <li className='list-group-item' name='covered-Area' onClick={handleAdvanceKey}>Covered Area</li> 
                        <li className='list-group-item' name="approval-authority" value={selectedName} onClick={handleAdvanceKey}>Approval Authority</li>
                        <li className='list-group-item' name="corner-plot" value={selectedName} onClick={handleAdvanceKey}>Corner Plot</li>
                        <li className='list-group-item' name="gated" value={selectedName} onClick={handleAdvanceKey}>Gated Community</li>
                        <li className='list-group-item' name="road-width" value={selectedName} onClick={handleAdvanceKey}>Road width</li>
                        <li className='list-group-item' name="property-type" value={selectedName} onClick={handleAdvanceKey}>Sub property type</li>
                        <li className='list-group-item' name='ownership' onClick={handleAdvanceKey}>Ownership</li>
                        <li className='list-group-item' name='sale-type' onClick={handleAdvanceKey}>Sale Type</li> 
                        <li className='list-group-item' name='poseted-since' onClick={handleAdvanceKey}>Posted Since</li> 
                        <li className='list-group-item' name="posted-by" value={selectedName} onClick={handleAdvanceKey}>Posted By</li>
                        <li className='list-group-item' name="images" value={selectedName} onClick={handleAdvanceKey}>photos & videos</li>
                        <li className='list-group-item' name='facing' onClick={handleAdvanceKey}>Facing</li> 
                        <li className='list-group-item' name="certified-agents" value={selectedName} onClick={handleAdvanceKey}>Posted By Certified agents</li>
                        <li className='list-group-item' name="rera-property" value={selectedName} onClick={handleAdvanceKey}>RERA registered properties</li>
                        <li className='list-group-item' name="rera-agent" value={selectedName} onClick={handleAdvanceKey}>RERA registered agent</li>
                        

                      </ul>
                    </div>
                    <div>
                      
                      {selectedName==='covered-Area' &&( <div>
                        <span>Covered Area</span>
                        <div style={{display:'flex', flexWrap:'wrap'}}>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='proffesionals' onClick={handleButtonClick}>Under process</button>
                        </div>
                        
                      </div>
                    )}
                    {selectedName==='approval-authority' &&(<div  >
                        <span>Approval Authority</span>
                        <div className='mb-3' style={{display:'flex', flexWrap:'wrap'}}>
                          <button class="btn btn-outline-secondary btn-sm me-2" value='ntkda' onClick={handleButtonClick}>+NTKDA</button>
                          <button class="btn btn-outline-secondary btn-sm me-2" value='kmda' onClick={handleButtonClick}>+KMDA</button>
                          <button class="btn btn-outline-secondary btn-sm me-2" value='wbidcl' onClick={handleButtonClick}>WBIDCL</button>
                          <button class="btn btn-outline-secondary btn-sm me-2" value='bmc' onClick={handleButtonClick}>+BMC</button>
                          <button class="btn btn-outline-secondary btn-sm me-2" value='kmc' onClick={handleButtonClick}>+KMC</button>
                          
                          
                        </div>
                        
                      </div>
                    )}
                    {selectedName==='corner-plot' &&(<div  >
                        <span>Corner Plot</span>
                        <div className='mb-3' style={{display:'flex', flexWrap:'wrap'}}>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='corner-plot' onClick={handleButtonClick}>Corner plot</button>
                        
                          
                        </div>
                        
                      </div>
                    )}
                    {selectedName==='gated' &&(<div  >
                        <span>Gated Community</span>
                        <div className='mb-3' style={{display:'flex', flexWrap:'wrap'}}>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='gated-community' onClick={handleButtonClick}>Gated Community</button>
                        </div>
                        
                      </div>
                    )}
                    {selectedName==='road-width' &&(<div  >
                        <span>Road width</span>
                        <div className='mb-3' style={{display:'flex', flexWrap:'wrap'}}>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='1' onClick={handleButtonClick}>+1</button>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='2' onClick={handleButtonClick}>+2 </button>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='3' onClick={handleButtonClick}>+3</button>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='4' onClick={handleButtonClick}>+4</button>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='5' onClick={handleButtonClick}>+5 </button>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='6' onClick={handleButtonClick}>+6</button>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='1' onClick={handleButtonClick}>+7</button>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='2' onClick={handleButtonClick}>+8 </button>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='3' onClick={handleButtonClick}>+9</button>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='4' onClick={handleButtonClick}>+10</button>
                       
                       
                          
                        </div>
                        
                      </div>
                    )}
                    {selectedName==='property-type' &&(<div  >
                        <span>Sub property type</span>
                        <div className='mb-3' style={{display:'flex', flexWrap:'wrap'}}>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='agricultural-land' onClick={handleButtonClick}>Agricultural Land</button> 
                        </div>
                        
                      </div>
                    )}
                    {selectedName==='ownership' &&( <div>
                        <span>Ownership</span>
                        <div style={{display:'flex', flexWrap:'wrap'}}>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='freehold' onClick={handleButtonClick}>+Freehold</button>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='leased' onClick={handleButtonClick}>+Leasehold</button>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='poa' onClick={handleButtonClick}>+Power of Attorney</button>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='cs' onClick={handleButtonClick}>+Co-operative society</button>
                    
                        </div>
                        
                      </div>
                    )}
                    {selectedName==='sale-type' &&( <div>
                        <span>Sale Type</span>
                        <div style={{display:'flex', flexWrap:'wrap'}}>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='new' onClick={handleButtonClick}>New</button>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='resale' onClick={handleButtonClick}>Resale</button>
                        </div>
                        
                      </div>
                    )}
                    {selectedName==='poseted-since' &&( <div>
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
                    {selectedName==='posted-by' &&( <div>
                        <span>Posted By</span>
                        <div style={{display:'flex', flexWrap:'wrap'}}>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='owner' onClick={handleButtonClick}>+Owner</button>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='builder' onClick={handleButtonClick}>+Builder</button>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='developer' onClick={handleButtonClick}>+Developer</button>
                    
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
                        <button class="btn btn-outline-secondary btn-sm me-2" value='n-e' onClick={handleButtonClick}>North-East </button>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='s-e' onClick={handleButtonClick}>South-East</button>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='n-w' onClick={handleButtonClick}>North-West </button>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='s-w' onClick={handleButtonClick}>South-West</button>
                    
                        </div>
                        
                      </div>
                    )}
                    {selectedName==='certified-agents' &&( <div>
                        <span>Posted By Certified agents</span>
                        <div style={{display:'flex', flexWrap:'wrap'}}>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='yes' onClick={handleButtonClick}>Yes</button>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='np' onClick={handleButtonClick}>No</button>
                        
                        </div>
                        
                      </div>
                    )} 
                    {selectedName==='rera-property' &&( <div>
                        <span>RERA registered properties</span>
                        <div style={{display:'flex', flexWrap:'wrap'}}>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='yes' onClick={handleButtonClick}>Yes</button>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='np' onClick={handleButtonClick}>No</button>
                        
                        </div>
                        
                      </div>
                    )}
                    {selectedName==='rera-agent' &&( <div>
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

export default AgricultureSell
