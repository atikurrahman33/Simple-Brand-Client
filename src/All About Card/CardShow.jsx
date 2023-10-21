

const CardShow = ({card}) => {
    const{ name, picture, availableQuantity}=card;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src= {picture}/></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default CardShow;