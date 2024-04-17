
const OrderCard = ({estate}) => {
    const { id,estate_title,segment_name } = estate;
    return (
        <div className="mb-8 border text-center">
            <h2>Id: {id}</h2>
            <h2>Title: {estate_title}</h2>
            <h2>Name: {segment_name}</h2>
        </div>
    );
};

export default OrderCard;