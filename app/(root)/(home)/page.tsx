"use client"
import MeetingTypeList from '@/components/MeetingTypeList';
import getTime from '@/components/getTime';
import getDate from '@/components/getDate';

const Home = () => {
  // const now = new Date();

  // const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  // const date = (new Intl.DateTimeFormat('en-US', { dateStyle: 'full' })).format(now);

  // Get the current date and time from the client's system
  const now = new Date();

  // Calculate the client's time zone offset in minutes
  const timeZoneOffsetMinutes = now.getTimezoneOffset();

  // Create a new date object adjusted by the time zone offset
  const clientDateTime = new Date(now.getTime() - timeZoneOffsetMinutes);

  // Format the time in 12-hour format with leading zeros (e.g., "hh:mm AM/PM")
  const time = clientDateTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

  // Format the full date in the client's locale
  const date = clientDateTime.toLocaleDateString('en-US', { dateStyle: 'full' });

  return (
    <section className="flex size-full flex-col gap-5 text-white">
      <div className="h-[303px] w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <h2 className="glassmorphism max-w-[273px] rounded py-2 text-center text-base font-normal">
            Upcoming Meeting at: 12:30 PM
          </h2>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">{getTime()}</h1>
            <p className="text-lg font-medium text-sky-1 lg:text-2xl">{getDate()}</p>
          </div>
        </div>
      </div>

      <MeetingTypeList />
    </section>
  );
};

export default Home;
