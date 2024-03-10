
export default function Process() {
    return (
      <div className="mt-10 flex items-center justify-center w-full relative">
        <article className=" w-4/5 border-black-400 ">
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold">How to generate an OpenAI API key</h1>
              <p className="text-gray-500 dark:text-gray-400">Follow the steps below to generate your OpenAI API key.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold">Step 1: Go to the OpenAI website</h2>
              <p>Visit the OpenAI website at https://openai.com.</p>
            </div>
            <div >
              <h2 className="text-xl font-bold">Step 2: Sign in or create an account</h2>
              <p>
                If you already have an OpenAI account, sign in using your credentials. If you don't have an account, click
                on the "Sign Up" button to create a new account.
              </p>
              <img
                alt="Sign in or create an account"
                className="aspect-video overflow-hidden rounded-lg"
                height="585"
                src="./openAIAuth.png"
                width="1044"
              />
            </div>
            <div >
              <h2 className="text-xl font-bold">Step 3: Navigate to the API settings</h2>
              <p>
                Once you are signed in to your OpenAI account, click on your profile icon in the top right corner of the
                page and select "API settings" from the dropdown menu.
              </p>
              <img
                alt="API settings"
                className="aspect-video overflow-hidden rounded-lg"
                height="585"
                src="/openAIApiKey.png"
                width="1044"
              />
            </div>
            <div >
              <h2 className="text-xl font-bold">Step 4: Generate an API key</h2>
              <p>
                In the API settings page, click on the "Generate API Key" button. This will create a new API key that you
                can use to access the OpenAI API.
              </p>
              <img
                alt="Generate API Key"
                className="aspect-video overflow-hidden rounded-lg"
                height="585"
                src="/openAiGeneratekey.png"
                width="1044"
              />
            </div>
            <div >
              <h2 className="text-xl font-bold">Step 5: Copy your API key</h2>
              <p>
                After generating the API key, you will see it displayed on the API settings page. Click on the "Copy"
                button to copy the API key to your clipboard.
              </p>
              <img
                alt="Copy API key"
                className="aspect-video overflow-hidden rounded-lg"
                height="585"
                src="/openAiCopykey.png"
                width="1044"
              />
            </div>
            <div >
              <h2 className="text-xl font-bold">Step 6: Use your API key</h2>
              <p>
                Once you have copied your API key, you can use it to authenticate your requests to the OpenAI API. Make
                sure to include your API key in the "Authorization" header of your API requests.
              </p>
            </div>
            <div >
              <h2 className="text-xl font-bold">Additional information</h2>
              <p>
                Your OpenAI API key is a sensitive piece of information that should be kept secure. Do not share your API
                key with others, and avoid committing it to public repositories or sharing it in public forums.
              </p>
            </div>
        
          </div>
        </article>
      </div>
    )
  }
  
  