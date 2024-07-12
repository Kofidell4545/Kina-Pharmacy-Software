import React from 'react'
import Data from '../../Data'

const category = () => {
  return (
    <div>
      <table>
        <tr>
        {Data.map(item => {
          <td
          key={item.id}
          >
            {item.categoryName}
          </td>
        })}
        </tr>
      </table>
    </div>
  )
}

export default category
