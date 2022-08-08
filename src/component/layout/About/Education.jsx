


import React from 'react'
import './Education.css'

const Education = () => {
    return (
        <table className="table">
            <thead>
                <th>Degree</th>
                <th>Depatment</th>
                <th>Institute</th>
                <th>Year</th>
            </thead>
            <tbody>
              
            <tr>
                    <td>
                        Matric
                    </td>
                    <td>
                        With computer objects
                    </td>
                    <td>
                        The Educators
                    </td>
                    <td>
                        2013
                    </td>

                </tr>
              
                <tr>
                    <td>
                        ICS
                    </td>
                    <td>
                    Intermediate of Computer Science
                    </td>
                    <td>
                        Punjab Collage
                    </td>
                    <td>
                        2014-2016
                    </td>

                </tr>

                <tr>
                    <td>
                        BSCS
                    </td>
                    <td>
                    Bachelor of Science in Computer Science
                    </td>
                    <td>
                        FAST NU
                    </td>
                    <td>
                        2017-2021
                    </td>

                </tr>
            </tbody>
        </table>
    )
}

export default Education