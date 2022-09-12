import React from 'react'

const About = () => {
    return (
      <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-pink-600">
                About
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm: grid-cols-2 gap-8 px-4 ">
            <div className="sm:text-right text-4xl font-bold  ">
              <p className="whitespace-pre-wrap pb-2">안녕하세요! 🙂</p>
              <p className="whitespace-pre-wrap pb-2">프론트엔드 개발자</p>
              <p className="whitespace-pre-wrap pb-2">'Kim mi sung(kimi)' 입니다.</p>
              <p className="whitespace-pre-wrap">만나서 반갑습니다.</p>
            </div>
            <div>
              <p className="text-lg font-bold leading-loose">My Keyword : Make, Study and Service</p>
              <p>
                늘 새로운 것에 도전하는 것을 두려워하지 않고 시도했었습니다.
                개발자는 저의 직업적 키워드를 모두 만족시키는 일이라고
                생각합니다. 만드는 것에 늘 흥미를 느끼고, 좋은 서비스라는 결과를
                내는 개발자가 되고 싶습니다. 모든 사람이 제각각 다른 것처럼
                각자의 황금기도 다 다르다고 생각합니다. 그동안의 경험이 헛된
                경험이 아니라고 믿고, 지금부터 달려가는 길에 최선을 다해
                집중하고 올인하고 싶습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default About