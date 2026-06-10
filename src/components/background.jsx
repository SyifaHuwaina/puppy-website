function Background() {
  const galleryImages = [
    { src: '/design.jpg', alt: 'Romantic design card collage' },
    { src: '/design1.jpg', alt: 'Blue envelope and scrapbook design' },
    { src: '/design2.jpg', alt: 'Cute cat and heart illustration' },
    { src: '/design3.jpg', alt: 'Bold black and white guitar style design' },
    { src: '/design4.jpg', alt: 'Soft inspirational reminder card' },
    { src: '/design5.jpg', alt: 'Another scrapbook style design card' },
  ]

  return (
    <>
      <div className="bg-orb bg-orb-left" />
      <div className="bg-orb bg-orb-right" />
      <div className="bg-stars" />

      <div className="bg-ribbons">
        <span className="ribbon ribbon-1" />
        <span className="ribbon ribbon-2" />
        <span className="ribbon ribbon-3" />
      </div>

      <div className="floating-designs" aria-hidden="true">
        {galleryImages.map((image, index) => (
          <img
            key={image.src}
            className={`floating-design floating-${index + 1}`}
            src={image.src}
            alt=""
          />
        ))}
      </div>
    </>
  )
}

export default Background