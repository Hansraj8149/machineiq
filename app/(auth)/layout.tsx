const AuthLayout = ({
    children
  }: {
    children: React.ReactNode;
  }) => {
    return ( 
      <main className="h-full bg-[#121212] flex items-center justify-center">
        {children}
      </main>
    );
  }
   
  export default AuthLayout;