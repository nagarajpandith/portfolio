import { stack } from '@/data/config';

export default function Stack() {
  return (
    <div>
      <div className="overflow-x-hidden w-full">
        <h2 className="landingSectionTitle max-w-max mx-0 text-left relative mb-4 md:w-max ">
          {stack.title}
        </h2>
      </div>

      <p className="text-lg font-bold mb-3">{stack.head1}</p>
      <div className="w-full flex flex-wrap -m-2">
        {stack.lan.map((item, index) => (
          <span
            className="hover:text-sky-600 cursor-pointer border  border-lightText rounded-lg m-2 px-3 py-1"
            key={index}
          >
            {item}
          </span>
        ))}
      </div>

      <p className="text-lg font-bold my-3">{stack.head2}</p>
      <div className="w-full flex flex-wrap -m-2">
        {stack.fr.map((item, index) => (
          <span
            className="hover:text-sky-600 cursor-pointer border  border-lightText rounded-lg m-2 px-3 py-1"
            key={index}
          >
            {item}
          </span>
        ))}
      </div>

      <p className="text-lg font-bold my-3">{stack.head3}</p>
      <div className="w-full flex flex-wrap -m-2">
        {stack.tool.map((item, index) => (
          <span
            className="hover:text-sky-600 cursor-pointer border  border-lightText rounded-lg m-2 px-3 py-1"
            key={index}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}