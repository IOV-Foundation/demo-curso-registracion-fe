interface IProps {
  name: string;
  company: string;
  role: string;
  email: string;
}

export function CredentialsCard({ name, company, role, email }: IProps) {
  return (
    <>
      <div className="mt-8 grid grid-cols-2 gap-4">
        <span className="font-bold">Nombre:</span>
        <span>{name}</span>
      </div>
      <div className="mt-8 grid grid-cols-2 gap-4">
        <span className="font-bold">Empresa Miembro:</span>
        <span>{company}</span>
      </div>
      <div className="mt-8 grid grid-cols-2 gap-4">
        <span className="font-bold">Rol/Función:</span>
        <span>{role}</span>
      </div>
      <div className="mt-8 grid grid-cols-2 gap-4">
        <span className="font-bold">Email:</span>
        <a href={`mailto:${email}`} className="text-cace-primary">
          {email}
        </a>
      </div>
    </>
  );
}
