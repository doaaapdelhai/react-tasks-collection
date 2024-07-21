

function ImgShow({image}){
    return <div className="">
    <img src={image.urls.small} alt={image.alt_description} />

    
    </div>;

}
export default ImgShow