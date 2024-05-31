# Noodle

This is a web application for finding live music performances in your area. It uses the Ticketmaster API to source tickets in the event that you find a concert you want to go to, and the Spotify API to provide artist photos and links to their music if you want to check out some of the performer's songs.

Things used in this project:
- Python Flask (backend)
- React.js (frontend)
- Leaflet.js
- Spotify API
- Ticketmaster API
- ~~Heroku (to host the backend)~~
- Microsoft Azure (hosting the backend)
- Github pages (to host the frontend)

Last week, I just restructured this project and completely re-created the frontend. And the finished product looks a lot better than it did.

**Some features that I have yet to implement:**
- the Spotify API has a response for an artist's 'popularity' rated from 1 - 100. I want to make some way for the user to select, for example, less than 30, and only get concerts with a performing artist with a popularity less than 30. Or the user could select greater than 90 and they would only see concerts of really popular artists.
- I want to make a way for the user to only see concerts happening today, this week, or this month, so the user can better narrow their search. Sometimes you just wanna go listen to live music right now.
- There are some maps that automatically populate nearby events based on where the map is currently centered. I think this would be a cool thing to implement.

**Known bugs:**
- The map currently does not center on a city when you search it, which it should.

### Update - 5/31/24
This migration took a bit longer than expected, the job search got a little full. But we are successfully migrated to Azure for hosting! 

### Update - 4/20/24
Migrating to a different backend service, so will be down for a few days. 
