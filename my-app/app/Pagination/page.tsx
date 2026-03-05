import ReactPaginate from 'react-paginate';
export default function Pagination() {
    return (
        <div>
            <ReactPaginate
                previousLabel={"previous"}
                nextLabel={"next"}  
                breakLabel={"..."}
                pageCount={10}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                onPageChange={(data: any) => console.log(data)}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"}
            />
        </div>
    );
}
