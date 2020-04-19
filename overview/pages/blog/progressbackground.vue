<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" lg="10">
        <div class="blog-hero">
          <h1>The Covid Watch app can now estimate duration and proximity of events, even when it is in the background!</h1>
        </div>

        <h3>April 18 2020</h3>

        <p>
            The Covid Watch pilot app hit several major milestones in the past 24 hours:
            background Temporary Contact Number (<a href="https://github.com/TCNCoalition/TCN#the-tcn-protocol">TCN</a>)
            exchange and estimating contact duration and proximity. We are on track to release a
            beta version of our app before the end of April.
        </p>
        <p>
            Many existing contact tracing apps, such as Singapore’s TraceTogether,
            <a href="https://tracetogether.zendesk.com/hc/en-sg/articles/360044846854-Does-TraceTogether-need-to-be-in-the-foreground-to-work-Can-I-use-other-apps-">
            have required</a> that iOS users keep their app running in the foreground. Covid
            Watch has identified and proven a method for detecting contact events between phones
            passively, with no action required by the user.
        </p>
        <p>
            This means that our users will be alerted to exposures that happen while they are
            riding the bus, talking on the phone, or otherwise not directly engaged with the app.
            We think this greatly increases our chances of detecting a large enough proportion of
            contacts to reduce the spread of COVID-19.
        </p>

        <h2>Technical Details</h2>
        <h3>Background TCN exchange between iOS devices</h3>
        <p>
            At present, iOS prevents third-party apps to use broadcast-oriented advertising of
            their data while in the background. We have found a way to bridge communication
            between iOS devices using nearby Android devices, without significantly affecting
            battery life.
        </p>
        <p>
            Here are the details on how TCNs will be shared between different devices:
        </p>
          <v-simple-table class="ma-2">
            <template v-slot:default>
            <thead>
                <tr>
                <th class="text-left">Listener App</th>
                <th class="text-left">Sender App</th>
                <th class="text-left">TCN Communication</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Android</td>
                    <td>Android</td>
                    <td>The Sender broadcasts TCN over Bluetooth. The Listener observes this broadcast directly.</td>
                </tr>
                <tr>
                    <td>iOS</td>
                    <td>Android</td>
                    <td>Same as row above.</td>
                </tr>
                <tr>
                    <td>Android</td>
                    <td>iOS</td>
                    <td>
                        The Listener signals availability as a Bluetooth “peripheral”. The Sender,
                        acting as a Bluetooth “central”, connects to this “peripheral” and writes
                        its TCN to a field exposed by the peripheral then disconnects.
                    </td>
                </tr>
                <tr>
                    <td>iOS (background)</td>
                    <td>iOS (foreground)</td>
                    <td>
                        The Listener acts as a Bluetooth “central”. It connects to the Sender and
                        reads the TCN from the field exposed by the “peripheral”, then disconnects.
                    </td>
                </tr>
                <tr>
                    <td>iOS (foreground)</td>
                    <td>iOS (background)</td>
                    <td>Same as row above.</td>
                </tr>
                <tr>
                    <td>iOS (background)</td>
                    <td>iOS (background)</td>
                    <td>
                        A nearby Android device acts as a bridge. It receives TCNs through “central”
                        write operations (see 3rd row above) and adds them to a rotating list to
                        broadcast alongside its own TCN.
                    </td>
                </tr>
            </tbody>
            </template>
        </v-simple-table>
        <p>
            With Apple’s contact tracing API, which will be released in May (see our related
            <nuxt-link to="/press_releases/google_apple_press_release">press release</nuxt-link>),
            this bridging may no longer be necessary, but we cannot afford to lose the
            intervening weeks; an earlier deployment may save lives. If you would like to make use
            of our bridging implementation in your own project, you can find it in our Github repos
            for our iOS Pilot and Android Pilot apps.
        </p>

        <h3>Estimating contact duration and proximity</h3>
        <p>
            Both of these statistics are crucial for evaluating the risk of exposure.
        </p>
        <p>
            The CDC's <a href="https://www.cdc.gov/coronavirus/2019-ncov/php/public-health-recommendations.html">
            Public Health Recommendations for Community-Related Exposure</a> describe a need to
            self isolate after "close contact (less than 6 feet) for a prolonged period of time"
            with someone experiencing COVID-19 symptoms. Though a precise definition of "a
            prolonged period of time" isn’t yet established, we expect users might wish to take
            different actions based on a 15 minute or 3-hour exposure event. 
        </p>
        <p>
            We can estimate duration because each user generates TCNs using a shared seed and a
            secret key. We rotate TCNs on a short interval to prevent users from being tracked by
            someone listening to what their phone broadcasts. This means that a listener might see
            three or four different numbers for a single contact event.
        </p>
        <p>
            When a diagnosed user chooses to upload their data to our server, we’ll generate
            associations between each TCN that user had broadcast while infectious, allowing us to
            cluster together sequential broadcasts. The app will then be able to estimate exposure
            duration when it notifies users.
        </p>
        <p>
            Proximity is estimated every time TCNs are exchanged, based on a Bluetooth metric called
            RSSI (Received Signal Strength Indication), which is the method of estimating proximity
            <a href="https://www.bluetooth.com/blog/proximity-and-rssi/">recommended</a> by the
            Bluetooth Special Interest Group.
        </p>
        
        <h2>Learn More</h2>
        <p>
            Covid Watch is an open source project. You can follow our progress across many Github repos:
        </p>
        <ul>
            <li><a href="https://github.com/covid19risk/covidwatch-ios-pilot">Covid Watch iOS Pilot App</a></li>
            <li><a href="https://github.com/covid19risk/covidwatch-android-pilot">Covid Watch Android Pilot App</a></li>
            <li><a href="https://github.com/TCNCoalition/tcn-client-ios">TCN Protocol Client for iOS</a></li>
            <li><a href="https://github.com/TCNCoalition/tcn-client-android">TCN Protocol Client for Android</a></li>
        </ul>
        <p> 
            You can also see <a href="https://www.youtube.com/watch?v=L3KZIs4PHXs&feature=youtu.be">a
            demonstration of this technology</a> on the Youtube channel of Zsombor Szabo, Covid Watch
            co-founder and Head of Engineering. If you have questions, you can always get in touch
            with us at <a href="mailto:contact@covid-watch.org">contact@covid-watch.org</a>.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>
