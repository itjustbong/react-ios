import type { NextPage } from 'next';
import Button from '../components/common/Button';
import Divider from '../components/common/Divider';
import Header from '../components/common/Header';
import { Col } from '../components/common/Layout';
import Text from '../components/common/Text';
import usePopUp from '../hooks/usePopUp';
import useToast from '../hooks/useToast';

const Home: NextPage = () => {
  const PopUp = usePopUp();
  const Toast = useToast();
  return (
    <Col>
      <Header />
      <PopUp.Render />
      <Toast.Render />

      <Divider />

      <Text fontWeight="bold">팝업창</Text>

      <Button
        backgroundColor=""
        onClick={() =>
          PopUp.open({ title: '팝업', bodyNode: <div>팝업 환영합니다</div> })
        }
      >
        팝업창
      </Button>

      <Divider />

      <Text fontWeight="bold">알림창</Text>
      <Button
        backgroundColor="white"
        color="black"
        border="1px solid black"
        onClick={() => Toast.open({ title: '알림', content: '알림창입니다' })}
      >
        info - 알림창
      </Button>
      <Button
        backgroundColor="white"
        color="red"
        border="1px solid red"
        onClick={() =>
          Toast.open({ title: '알림', content: '알림창입니다', type: 'error' })
        }
      >
        error - 알림창
      </Button>

      <Button
        backgroundColor="white"
        color="green"
        border="1px solid green"
        onClick={() =>
          Toast.open({
            title: '알림',
            content: '알림창입니다',
            type: 'success',
          })
        }
      >
        success - 알림창
      </Button>

      <Button
        backgroundColor="white"
        color="#FFD600"
        border="1px solid #FFD600"
        onClick={() =>
          Toast.open({
            title: '알림',
            content: '알림창입니다',
            type: 'warning',
          })
        }
      >
        warning - 알림창
      </Button>

      <Divider />

      <Text fontWeight="bold">슬라이드 업 모달</Text>
      <Button onClick={() => alert('리팩토링 중...')}>슬라이드업</Button>

      <Divider />
    </Col>
  );
};
export default Home;
