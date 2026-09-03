'use client';

type Props = {
  src: string;
  poster: string;
  kicker: string;
  title: string;
};

export default function VideoTile({ src, poster, kicker, title }: Props) {
  return (
    <article>
      <div className="tile">
        <video
          src={src}
          poster={poster}
          controls
          loop
          playsInline
          preload="none"
          onMouseEnter={(e) => {
            const v = e.currentTarget;
            v.play().catch(() => {});
          }}
          onMouseLeave={(e) => {
            const v = e.currentTarget;
            v.pause();
            v.currentTime = 0;
          }}
        />
        <div className="tileLabel">
          <span className="serif tileKicker">{kicker}</span>
          <h3 className="anton tileTitle">{title}</h3>
        </div>
      </div>
    </article>
  );
}
