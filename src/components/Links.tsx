const Links: React.FC<{
  setBio: (bio: boolean) => void;
}> = ({ setBio }) => {
  return (
    <>
      <div className="flex justify-center items-center gap-x-4">
        <p
          className="text-4xl hover:cursor-pointer"
          onClick={() => setBio(true)}
        >
          &#128209;
        </p>
        <a href="https://www.linkedin.com/in/jamesdavidyu/">
          <img
            title="LinkedIn"
            alt="LinkedIn"
            src="https://m2my1rq4tt.ufs.sh/f/AR95GDbqfmiLtMhFwSHmo1TbgR82kftzaUVMw7Zxcr9pIXHj"
            className="h-10"
          />
        </a>
        <a
          className="text-5xl"
          href="mailto:jamesdavidyu@gmail.com"
          title="jamesdavidyu@gmail.com"
        >
          &#128231;
        </a>
      </div>
      <div className="flex justify-center items-center gap-x-4 mt-2">
        <a href="https://github.com/youyoungjune">
          <img
            title="Personal GitHub"
            alt="Personal GitHub"
            src="https://m2my1rq4tt.ufs.sh/f/f9154ab4-83d6-4f30-8828-36ef21c11531-klmal9.png"
            className="h-10"
          />
        </a>
        <a href="https://github.com/jamesdavidyu">
          <img
            title="Work GitHub"
            alt="Work GitHub"
            src="https://m2my1rq4tt.ufs.sh/f/f9154ab4-83d6-4f30-8828-36ef21c11531-klmal9.png"
            className="h-10"
          />
        </a>
      </div>
    </>
  );
};

export default Links;
