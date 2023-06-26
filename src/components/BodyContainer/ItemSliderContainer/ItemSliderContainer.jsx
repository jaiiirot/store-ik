import videoTres from "../../../asset/video/videoTres.mp4";
function ItemSliderContainer() {
  return (
    <section className="itemSliderContainer">
      <div className="itemSliderContainer__itemSlider">
        <video autoPlay muted playsInline loop>
          <source src={videoTres} type="video/mp4" />
        </video>
        <div className="itemSliderContainer__itemSlider--info" >
          <span>Indumentaria</span>
          <span>Kevin</span>
          <p>¡Los mejores productos estan en las mejores Tiendas!</p>
        </div>
      </div>
    </section>
  );
}
export default ItemSliderContainer;
