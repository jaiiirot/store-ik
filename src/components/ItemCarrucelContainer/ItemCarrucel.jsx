function ItemCarrucel({ video }) {
  return (
    <>
      <video autoPlay muted playsInline loop>
        <source src={video} type="video/mp4" />
      </video>
      <div className="my-carrucel--info">
        <span>Indumentaria</span>
        <span>Kevin</span>
        <p>¡Los mejores productos estan en las mejores Tiendas!</p>
      </div>
    </>
  );
}

export default ItemCarrucel;
