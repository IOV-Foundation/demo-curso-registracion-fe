import clsx from 'clsx';

interface IProps {
  title: string;
  description: string;
  type: 'Error' | 'Success';
}

export function Notification({
  title,
  description,
  type,
}: IProps): JSX.Element {
  return (
    <div className="flex flex-1 flex-col">
      <div
        className={clsx(
          'mt-10  pb-12 text-center',
          type === 'Error' && 'bg-red-100',
          type === 'Success' && 'bg-green-100',
        )}
      >
        <h2 className="mt-8 p-4 text-center text-xl">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
