import React from 'react'
import pizzas from '../pizzasdata'
import Pizza from '../components/Pizza'

export default function Home() {
    return (
        <di>
            <div className="row">

                {pizzas.map(pizza=>{

                    return <div className="col-md-4">
                        <div>
                            <Pizza pizza={pizza}/>
                        </div>
                    </div>

                })}

            </div>
        </di>
    )
}