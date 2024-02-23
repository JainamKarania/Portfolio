
import DP from '../assets/Profile(2).jpg'
export const AboutMe = () => {
  return (
    <div>
      <section className="py-20" id='aboutme'>
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col gap-8 md:flex-row items-center justify-center space-y-6 md:space-y-0">
        <div className="md:w-1/2">
          <img src={DP} alt="Profile" className="rounded-full w-96 h-96 object-cover object-center" />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur libero in massa tristique, a convallis arcu feugiat. Mauris vulputate eros ac sapien fermentum mollis. Fusce volutpat odio ut urna feugiat, non condimentum lacus dignissim. Aenean vitae ante vel leo congue auctor. Suspendisse et magna ut dolor fringilla vestibulum ac et libero. Sed eleifend sollicitudin erat ut facilisis.</p>
          <p className="text-gray-700">Fusce vel metus eget magna gravida malesuada. Ut in lacus nec eros efficitur venenatis. Cras eu turpis nec nulla hendrerit sodales. Vivamus sagittis eu magna et efficitur. Pellentesque id dolor vel libero auctor aliquet. Proin vitae ultrices lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam nec quam quam. Fusce viverra lectus sit amet sodales euismod.</p>
        </div>
      </div>
    </div>
        </section>
    </div>
  )
}


