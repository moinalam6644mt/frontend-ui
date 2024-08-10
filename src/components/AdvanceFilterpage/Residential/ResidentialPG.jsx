import React,{useState} from 'react'


const ResidentialPG = ({ selectedName, handleAdvanceKey, handleButtonClick }) => {

  return (
    <>
        
                  <div style={{display:'inline-flex', background:'white', paddingTop:'5px',marginTop:'2px',position: 'absolute', right: '0',width: '700px',border: '1px solid #ddd',padding: '1rem', columnGap: '1rem'}}>
                    <div>
                      <ul className='list-group'>
                        <li className='list-group-item' name="varified_pg" value={selectedName} onClick={handleAdvanceKey}>Varified PG</li>
                        <li className='list-group-item' name='tenants_preffered' onClick={handleAdvanceKey}>Tenants Preffered</li> 
                        <li className='list-group-item' name="flatmate" value={selectedName} onClick={handleAdvanceKey}>Flatmate</li>
                        <li className='list-group-item' name='food' onClick={handleAdvanceKey}>Food</li> 
                        <li className='list-group-item' name="posted_by" value={selectedName} onClick={handleAdvanceKey}>Posted By</li>
                        <li className='list-group-item' name='operating_since' onClick={handleAdvanceKey}>Operating Since</li> 
                      </ul>
                    </div>
                    <div>
                      
                      
                      {selectedName==='varified_pg' &&(<div  >
                        <span>Varified PG</span>
                        <div className='mb-3' style={{display:'flex', flexWrap:'wrap'}}>
                          <button class="btn btn-outline-secondary btn-sm me-2" value='varified-pg' onClick={handleButtonClick}>varified PG</button>
                          
                        </div>
                        
                      </div>
                    )}
                      {selectedName==='tenants_preffered' &&( <div>
                        <span>Tenants Preffered</span>
                        <div style={{display:'flex', flexWrap:'wrap'}}>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='proffesionals' onClick={handleButtonClick}>Proffesionals</button>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='students' onClick={handleButtonClick}>Students</button>
                    
                        </div>
                        
                      </div>
                    )}
                    {selectedName==='flatmate' &&( <div>
                        <span>Flatmate</span>
                        <div style={{display:'flex', flexWrap:'wrap'}}>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='flatmate' onClick={handleButtonClick}>Flatmate properties only</button>
                        
                    
                        </div>
                        
                      </div>
                    )}
                    {selectedName==='food' &&( <div>
                        <span>Food</span>
                        <div style={{display:'flex', flexWrap:'wrap'}}>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='food-provided' onClick={handleButtonClick}>Food provided</button>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='non-veg-allowed' onClick={handleButtonClick}>Non-veg Allowed</button>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='self-cooking-kitchen' onClick={handleButtonClick}>Self cooking kitchen</button>
                    
                        </div>
                        
                      </div>
                    )}
                    {selectedName==='posted_by' &&( <div>
                        <span>Posted By</span>
                        <div style={{display:'flex', flexWrap:'wrap'}}>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='owner' onClick={handleButtonClick}>Owner</button>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='property-manager' onClick={handleButtonClick}>Property Manager</button>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='agent' onClick={handleButtonClick}>Agent</button>
                    
                        </div>
                        
                      </div>
                    )}
                    {selectedName==='operating_since' &&( <div>
                        <span>Operating Since</span>
                        <div style={{display:'flex', flexWrap:'wrap'}}>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='5' onClick={handleButtonClick}>Last 5 years</button>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='10' onClick={handleButtonClick}>Last 10 years </button>
                        <button class="btn btn-outline-secondary btn-sm me-2" value='any' onClick={handleButtonClick}>Any</button>
                    
                        </div>
                        
                      </div>
                    )}
                    </div>
                    </div>
                
    </>
  )
}

export default ResidentialPG
