export function ContactPage() {
  return (
    <div className="flex justify-center py-12">
      <div className="w-full max-w-2xl relative">
        <div className="absolute -top-6 -left-6 narration-box bg-tertiary text-black px-4 py-2 font-bold z-20 border-2 border-black">
          TRANSMISSION INCOMING...
        </div>
        
        <div className="comic-panel bg-surface border-4 border-primary p-8 shadow-[8px_8px_0px_0px_#00fbfb]">
          <h2 className="font-display-xl text-headline-md text-primary uppercase italic mb-8 glitch-shadow-magenta">
            Send a Message
          </h2>
          
          <form className="space-y-6">
            <div className="flex flex-col">
              <label htmlFor="name" className="font-label-md uppercase text-tertiary mb-2">Alias (Name)</label>
              <input 
                type="text" 
                id="name" 
                className="bg-black/50 border-2 border-primary text-on-surface p-3 focus:outline-none focus:border-tertiary focus:ring-1 focus:ring-tertiary transition-colors font-body-md"
                placeholder="Peter Parker"
              />
            </div>
            
            <div className="flex flex-col">
              <label htmlFor="email" className="font-label-md uppercase text-tertiary mb-2">Comms Link (Email)</label>
              <input 
                type="email" 
                id="email" 
                className="bg-black/50 border-2 border-primary text-on-surface p-3 focus:outline-none focus:border-tertiary focus:ring-1 focus:ring-tertiary transition-colors font-body-md"
                placeholder="webslinger@dailybugle.com"
              />
            </div>
            
            <div className="flex flex-col">
              <label htmlFor="message" className="font-label-md uppercase text-tertiary mb-2">The Intel (Message)</label>
              <textarea 
                id="message" 
                rows={5}
                className="bg-black/50 border-2 border-primary text-on-surface p-3 focus:outline-none focus:border-tertiary focus:ring-1 focus:ring-tertiary transition-colors font-body-md resize-none"
                placeholder="I need pictures of Spider-Man!"
              ></textarea>
            </div>
            
            <button 
              type="button" 
              className="w-full py-4 bg-primary text-on-primary font-label-lg uppercase italic font-bold hover:bg-white hover:text-black transition-colors border-2 border-transparent hover:border-black mt-4"
            >
              Dispatch Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
