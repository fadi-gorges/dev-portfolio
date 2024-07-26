import Block from "@/app/projects/[slug]/_components/Block";

const AusBizGrowthProject = (
  <>
    <Block
      imageSrc="/media/ausbizgrowth/dashboard.jpg"
      imageAlt="AusBizGrowth Dashboard"
      title="Empowering SMEs with Growth Insights"
      alignText="right"
    >
      <h6>
        AusBizGrowth is a demo dashboard web app developed by a team of 8
        students at UTS. It serves as a front-end demonstrator, showcasing the
        potential functionality of a website that helps users determine the
        growth potential of small-medium enterprises (SMEs).
        <br />
        <br />
        Our platform allows users to view information about SMEs as well as a
        growth rating score based on their data, making it easier for users to
        identify promising businesses. It is built to be user-friendly and
        intuitive, allowing users to easily navigate and find the information
        they need.
      </h6>
    </Block>
    <Block
      imageSrc="/media/ausbizgrowth/search.jpg"
      imageAlt="Search and Filter SMEs"
      title="Search and Filter SMEs"
      alignText="left"
    >
      <h6>
        The core of AusBizGrowth lies in its ability to analyze and sort data
        based on user-entered filters. Users can search for SMEs based on
        specific features and criteria, and the application will return relevant
        businesses that meet those requirements.
        <br />
        <br />
        This data-driven approach ensures that users can find growing SMEs more
        efficiently than through traditional research methods.
      </h6>
    </Block>
    <Block
      imageSrc="/media/ausbizgrowth/search-profiles.jpg"
      imageAlt="Search Profiles and Notifications"
      title="Search Profiles and Notifications"
      alignText="right"
    >
      <h6>
        AusBizGrowth also allows users to save and manage their search profiles.
        Users can create profiles based on their search criteria, and the
        application will automatically track SMEs that match these profiles.
        <br />
        <br />
        Users will receive email notifications at a set frequency, updating them
        on which SMEs match their search profiles. This feature ensures that
        users stay informed about potential growth opportunities without having
        to manually search for updates.
      </h6>
    </Block>
    <Block
      imageSrc="/media/ausbizgrowth/add-enterprises.jpg"
      imageAlt="Add New Enterprises"
      title="Add New Enterprises"
      alignText="left"
    >
      <h6>
        Users can also add new enterprises to the AusBizGrowth platform. This
        can be done by manually entering the details of the enterprise or by
        batch uploading data contained in a CSV file.
        <br />
        <br />
        Once added, these enterprises are stored in the database and their
        information is tracked. This feature allows users to keep the platform
        up-to-date with the latest information about SMEs.
      </h6>
    </Block>
  </>
);

export default AusBizGrowthProject;
