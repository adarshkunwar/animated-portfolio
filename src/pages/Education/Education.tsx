import { GraduationCap, Calendar, MapPin } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor in Cmputer Application",
      institution: "Tribhuwan University",
      location: "Nepal",
      duration: "2020 - present",
      gpa: "unknown",
      highlights: [
        "Data Structures & Algorithms",
        "Web Development",
        "Computer Networking",
        "Database Management",
      ],
    },
    {
      degree: "Higher Secondary Education",
      institution: "Kalika Manavyan Secondary School",
      location: "Butwal, Nepal",
      duration: "2018-2020",
      gpa: "95%",
      highlights: ["Computer Science", "Mathematics", "Physics"],
    },
  ];

  return (
    <div
      data-testid="education"
      className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl flex items-center justify-center gap-3">
            <GraduationCap className="w-10 h-10" />
            Education
          </h2>
          <div className="mt-4 h-1 w-24 bg-blue-500 mx-auto rounded"></div>
        </div>

        {/* Education Timeline */}
        <div className="space-y-12">
          {educationData.map((edu, index) => (
            <div
              key={index}
              data-testid={`education-item-${index}`}
              className="relative bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* Left Column - Timeline */}
                <div className="lg:col-span-1">
                  <div className="flex items-center text-gray-600 mb-2">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span data-testid={`duration-${index}`}>
                      {edu.duration}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span data-testid={`location-${index}`}>
                      {edu.location}
                    </span>
                  </div>
                </div>

                {/* Right Column - Details */}
                <div className="lg:col-span-3">
                  <h3
                    className="text-2xl font-semibold text-gray-900 mb-2"
                    data-testid={`degree-${index}`}
                  >
                    {edu.degree}
                  </h3>
                  <h4
                    className="text-xl text-gray-700 mb-4"
                    data-testid={`institution-${index}`}
                  >
                    {edu.institution}
                  </h4>
                  <p
                    className="text-gray-600 mb-4"
                    data-testid={`gpa-${index}`}
                  >
                    GPA: {edu.gpa}
                  </p>
                  <div>
                    <h5 className="font-medium text-gray-900 mb-2">
                      Key Courses
                    </h5>
                    <div
                      className="flex flex-wrap gap-2"
                      data-testid={`highlights-${index}`}
                    >
                      {edu.highlights.map((highlight, hIndex) => (
                        <span
                          key={hIndex}
                          className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
