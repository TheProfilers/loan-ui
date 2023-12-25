import { BsFillEyeFill, BsTrash3 } from 'react-icons/bs'

export default function ShopAgentDisplay() {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr className="bg-base-200">
            <th>1</th>
            <td>Brian</td>
            <td>1234567890</td>
            <td>
              <div className="flex space-x-1">
                <button className="btn btn-sm btn-square btn-success">
                  <BsFillEyeFill />
                </button>
                <button className="btn btn-sm btn-square btn-warning">
                  <BsTrash3 />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
