import React from "react";
import { Search } from "./search";
export const Header = () => {
  return (
    <div className="h-14 bg-blue flex justify-center items-center gap-6 p-0.5">
      {/* Logo */}
      <div className="logo">
        <img
          src="data:image/png;base64,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"
          alt="flipcart"
          className="w-20"
        />
        <div className="text-white font-bold">
          Explore{" "}
          <span className="text-yellow">
            Plus{" "}
            <img
              className="inline w-3"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAABpZJREFUSA2tV2uIXdUVXmu/zrn3jplJZvIw9ZVJQgYnCY2F2laQNh1jiAaDilYqLQ0UaUT7ErV/VKhILSgaEfrTH8FYCRIjmoeRIBqVhkaDHWuSsZa2E52XyTzuPefsZ9e+440zYR5X2j2cu8/ZZ+317fX61hmErzHGnl/XxRO83ZV8S3KlPsvarAOHjgkoXC28py7+x7Fm1WGzgudeWH8VZ3gwldjhPQBf6IF/KwNIAqlACNZnvsCfiPa+Pc3oZM0IfSlzfwStFh4y42HiM4DspACbB7BVT9BY8sE+EsIVaTM6mwIe37vqSp64rREwDiQ/pSkDNiiBm0kVtnAgpO12g8WW/xswS92O8kWmHLitgxJUXtjwUDaKtzgdXuHkbvSGrDYAQd8bAvD5wOeNcfbm0hUI4ngwss3mEhL6q1Xx8bbbP3wwKjfnLt/Igz8cjKZAEzg3Hp25Hpfmh+cCn9fVrGx+kbTatiANiNRAAcWIxeKZhlIx7t51hT7JOFkbrUbyvTG/AXJCQ2ameU5gczr9Pq+Y7Q40MGUgqVjgiX6t47ZT/Q1leOl/Mob6ZRAUBrIYcrowXGf6kk0NmZnmGYHDYHptGOB7COQQXe1BGGCJgWg1KL33QkUs5HtDrl0EDjZAyKVgVu027y96Kn+7Y82F8vH5vDsoIYQbWraJc70jOLMZheGQ6xg2CIUEsBJcJke0E2tbvj30+VRltFdBPzsGDNb7qgRP8kjynJb1mBwNRuy2NfWnlq2nTjT21YHtSOctTITfgjPfpeSgExMaxaueLEFPygoFdlgckd0TGxubp87uU/EHVhEPhOFY25PgXtMBjAQVFORVWQtWvJJb+0THj3qPoRnu7OEKDyJD5qgWG4CcETC5GDRdVp+GgAdMjT2nVpvjUwEb9+G06g5OPuGyZAOzcglzEoqqAJNNHgKcgJJkUBg/kmf4PRGArUEJzNYi9TEQCbmVIkCG/iuYcIAF/9LwmH9ncReMA9DBZhm4WvfSKTeH9ypLC8uvDgXfSi7fkgS1PHccIs3WiPVKirVDh70b9fDKe2QZd9qCjhAQXBV7qYR+X8vM4QWX9I/MgtPU8sTLa5eCxp+GwB6klFvo6dyc7JIb8n8K5NFe8ma/AH6GyGGQPd125wd/bkrzPEItN/1tgET+OPrCun7B2C5PxV1eSznUYV8VELwMJ0tQ9HJIFQOUvjSPvq/92ufwb1jsIVlBfLDCgR1nZ4TuTUtyhOxnHrTzwBAeHn1xPaLQuxbc/PH/5OrwRWerQ/8DKLJfkl/BM8ojXy8kooYzYkIlk0Z4WifgRWnJPWWZ/XX2xuWvoTL7k8QcwwtqdzazqabLMNDyHWpV27ybuIFL1QkVpMKgeMbmVselNjr64lWraPkopfqS2PZiB4osJUuWKNKAp7r2Qg/xsjmBUNyHa8x5EpgKHj5R6yDx28lzm4HJLopbnXS8l1SJ0aNEKIpTlAm/gG2s9bbjfQ7Y9YULu1DaiZYFtt4MCAwKqinHKS6JWYxttgfS8LOpYFPvXa4eBSV+RShdREQQapH1dJ2/OfF85IXg3F+8CXfw9r59dcMbCsb3reqWFXcXKv1j1WIXOaTNX/I0lVgUO0WNdwMuh1pjT5zPvdW6sFRhH8rUfiPKI3kMiSGIMYi7JflVHUIun4WFAwfpI6KuaBpwQ1l+dMlKXrZ3kaXbkZpEZDAUJCplIN9fh8uqbzRk45wfXb5JKHfAM40RVKSWvsUMxQtepc6yEy/Oj0yVj/fiwoX4nF4z+AlN94e+dD8oc5DqXMY4YaLQ1fitANOBXU1uSzhHS52JUw45hmOchVvx0uL12diOxGYfuCo/EhD3E89NJogRgExtiWXS2DX2Ule7z9VNxYSodyVBHclW1fPYGUFnH3MCx20UmyeJ/B1SVsYMZam6zHm3saGSOtDP6XNoucnJedQKi3FRRat2Nt7PNs/o6mnCy/K3/ED5CC/JntjmApFtyHDH2d3fPEvk3kmR/12eERPTeilBoM6zp+XaT/8+TccMD/MCUxb6MCSfDiB/SLWIrkDgAnvkRa6HZQwssU7sPBjo34kqFCjY+e+xGfDOL83r6rpkR8chq+WJSABxOCoVfpkGrQk0MgINanegC364cuPHf51cmfu3KWDEXs04ezxiiErs2Qjpag+t3a7u3kpCH5Y2fME9f2xuuK/ezljHX72efpcPdd6YlPhKW3hKb/Ito4/ak6odP5NDtQm7r/3O3o+m75j96b+QPggb7gXLfAAAAABJRU5ErkJggg=="
              alt=""
            />
          </span>
        </div>
      </div>
      {/* Search */}
      <Search />
      {/* button */}
      <button className="bg-white text-blue text-xl font-semibold px-14 h-fit py-[4px]">
        Login
      </button>
      {/* nav */}
      <div className="gap-10 flex">
      <span className="text-white text-lg font-semibold">Become a Seller</span>
      <span className="text-white text-lg font-semibold flex items-center gap-1">
        More{" "}
        <svg
          class="h-3 w-3 text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          {" "}
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </span>
      <span className="flex text-white text-lg font-semibold gap-2">
        <svg
          class="h-6 w-6 text-white"
          viewBox="0 0 24 24"
          fill="currentColor"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          {" "}
          <circle cx="9" cy="21" r="1" /> <circle cx="20" cy="21" r="1" />{" "}
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>
        Cart
      </span>
      </div>
    </div>
  );
};
