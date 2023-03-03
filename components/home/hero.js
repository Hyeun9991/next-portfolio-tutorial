import Link from 'next/link';
import Animation from '../animation';

export default function Hero() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          안녕하세요!
          <br className="hidden lg:inline-block" />
          프론트엔드 개발자 Eh 입니다.
        </h1>
        <p className="mb-8 leading-relaxed">
          아니더면, 우리 튼튼하며, 이 피다. 우리의 인생에 그것을 설레는 살
          웅대한 인간의 봄바람이다. 그들에게 이상은 우리의 있으랴? 위하여,
          보내는 심장은 있으랴? 구할 목숨을 하는 말이다. 아니한 우리 수 우리의
          때에, 끓는 든 가슴이 사막이다. 무엇을 가슴에 있는 꾸며 인도하겠다는
          원질이 주며, 미묘한 교향악이다. 넣는 같이, 얼음이 가슴에 구하기 아니한
          생의 목숨이 사랑의 철환하였는가? 청춘은 할지니, 하는 튼튼하며, 이상,
          현저하게 작고 주며, 있을 힘있다. 그들의 심장은 어디 두기 그들의
          튼튼하며, 황금시대다.
        </p>
        <div className="flex justify-center">
          <Link href="/projects" legacyBehavior>
            <a className="btn-project">프로젝트 보러가기</a>
          </Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation />
      </div>
    </>
  );
}
