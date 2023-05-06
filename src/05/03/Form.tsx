import { FC, useCallback } from "react";

type Props = {
  name: string;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
};

export const Form: FC<Props> = ({ name, onSubmit }) => {
  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      onSubmit?.(event);
    },
    [onSubmit]
  );

  return (
    <form onSubmit={handleSubmit}>
      <h2>アカウント情報</h2>
      <p>{name}</p>

      <div>
        <button>編集する</button>
      </div>
    </form>
  );
};
