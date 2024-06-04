import TableProducts from "./TableProducts";

export default function MainProducts({data}:any) {
    return (
        <main className="">
            <TableProducts data={data}/>
        </main>
    )
};
