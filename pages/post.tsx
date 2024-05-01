import { useState } from 'react';
import { Button, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, styled  } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const inputValueTypeNames = ['night_work', 'overtime', 'holiday_work', 'holiday_overtime_work', '주유시간', 'total_amount_paid'] as const;

type inputValueType = typeof inputValueTypeNames[number];

interface inputValueInfo {
    id: string;
    label: string;
    placeholder: string;
}

const inputValueInfoMap: Record<inputValueType, inputValueInfo> =  {
    night_work: {
        id: 'night_work',
        label: '야간근로',
        placeholder: '야간근로',
    },
    overtime: {
        id: 'overtime',
        label: '연장근로',
        placeholder: '연장근로',
    },
    holiday_work: {
        id: 'holiday_work',
        label: '휴일근로',
        placeholder: '휴일근로',
    },
    holiday_overtime_work: {
        id: 'holiday_overtime_work',
        label: '휴일연장근로',
        placeholder: '휴일연장근로',
    },
    주유시간: {
        id: '주유시간',
        label: '주유시간',
        placeholder: '주유시간',
    },
    total_amount_paid: {
        id: 'total_amount_paid',
        label: '지급총액',
        placeholder: '지급총액',
    },
}

interface postInfo {
    id: number;
    title: string;
    content: string;
}

const tmpPostList: postInfo[] = [
    {
        id: 1,
        title: 'ABC',
        content: 'sldkfjsdlkfjsldkfjslkfjslkj'
    },
    {
        id: 2,
        title: 'DEF',
        content: 'asldkjflksdjflksjdfklsjlkdsf'
    },
    {
        id: 3,
        title: 'GHI',
        content: 'qwoeiruqwoeiruqwoeiruqwoeiru'
    }
]

const CustomTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: '#A0AAB4',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#B2BAC2',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#E0E3E7',
      },
      '&:hover fieldset': {
        borderColor: '#B2BAC2',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#6F7E8C',
      },
    },
  });

export default function PostPage() {
    // const [inputVal, setInputVal] = useState<>();
    const [open, setOpen] = useState<boolean>(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
        console.log(e.target.value);
    };

    return (
        <div>
            <Button size="small" variant="outlined" onClick={handleClickOpen}>
                <AddIcon/>
                추가하기
            </Button>
            <TableContainer>
                <Table>
                    <TableHead>
                            <TableRow>
                                <TableCell align="center" colSpan={3} rowSpan={2}>인적사항</TableCell>
                                <TableCell align="center" colSpan={6}>근태 현황 및 기타수당 지급 조건</TableCell>
                                <TableCell align="center" colSpan={1} rowSpan={2}>통상시급(최저임금여부)</TableCell>
                                <TableCell align="center" colSpan={9}>월급여구성내역</TableCell>
                                <TableCell align="center" colSpan={6} rowSpan={2}>공제내역</TableCell>
                                <TableCell align="center" colSpan={1} rowSpan={5}>실수령액</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="center" colSpan={4}>합의 법정제시간/합의시간의 증갑/기타수당조건</TableCell>
                                <TableCell align="center" colSpan={2}>소정시간/연차</TableCell>
                                <TableCell align="center" colSpan={4}>통상임금,비과세 / 법정제수당</TableCell>
                                <TableCell align="center" colSpan={4}>비과세급여 / 기타수당</TableCell>
                                <TableCell align="center" colSpan={1}>합계</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="center" colSpan={1} rowSpan={3}>사번, 입사일, 마지막근로일</TableCell>
                                <TableCell align="center" colSpan={1} rowSpan={3}>성명, 직급/직무, 부 서</TableCell>
                                <TableCell align="center" colSpan={1}>주민번호</TableCell>
                                <TableCell align="center" colSpan={1}>야간근로</TableCell>
                                <TableCell align="center" colSpan={1}>연장근로</TableCell>
                                <TableCell align="center" colSpan={1}>휴일근로</TableCell>
                                <TableCell align="center" colSpan={1}>휴일연장</TableCell>
                                <TableCell align="center" colSpan={1}>월소정시간</TableCell>
                                <TableCell align="center" colSpan={1}>주휴시간</TableCell>
                                <TableCell align="center" colSpan={1}>통상시급</TableCell>
                                <TableCell align="center" colSpan={1}>기본급</TableCell>
                                <TableCell align="center" colSpan={1}></TableCell>
                                <TableCell align="center" colSpan={1}></TableCell>
                                <TableCell align="center" colSpan={1}></TableCell>
                                <TableCell align="center" colSpan={1}>식대보조비</TableCell>
                                <TableCell align="center" colSpan={1}>차량유지비</TableCell>
                                <TableCell align="center" colSpan={1}>육아보조비</TableCell>
                                <TableCell align="center" colSpan={1}>일숙직비</TableCell>
                                <TableCell align="center" rowSpan={3}>지급총액 / 실부과기준</TableCell>
                                <TableCell align="center" colSpan={1}>국민연금</TableCell>
                                <TableCell align="center" colSpan={1}>건강보험</TableCell>
                                <TableCell align="center" colSpan={1}>장기요양보험</TableCell>
                                <TableCell align="center" colSpan={1}>고용보험</TableCell>
                                <TableCell align="center" colSpan={1}>갑근세</TableCell>
                                <TableCell align="center" rowSpan={3}>공제총액</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="center" colSpan={1}>나이(만)</TableCell>
                                <TableCell align="center" colSpan={1}>야간증감</TableCell>
                                <TableCell align="center" colSpan={1}>연장증감</TableCell>
                                <TableCell align="center" colSpan={1}>휴일증감</TableCell>
                                <TableCell align="center" colSpan={1}>휴연증감</TableCell>
                                <TableCell align="center" colSpan={1}>소정증감</TableCell>
                                <TableCell align="center" colSpan={1}>주소점시간</TableCell>
                                <TableCell align="center" colSpan={1}>최저임금여부</TableCell>
                                <TableCell align="center" colSpan={1}>야간수당</TableCell>
                                <TableCell align="center" colSpan={1}>연장수당</TableCell>
                                <TableCell align="center" colSpan={1}>휴일수당</TableCell>
                                <TableCell align="center" colSpan={1}>휴일연장수당</TableCell>
                                <TableCell align="center" colSpan={1}>연차수당</TableCell>
                                <TableCell align="center" colSpan={1}>공휴일수당</TableCell>
                                <TableCell align="center" colSpan={1}></TableCell>
                                <TableCell align="center" colSpan={1}></TableCell>
                                <TableCell align="center" colSpan={1}></TableCell>
                                <TableCell align="center" colSpan={1}>건강정산</TableCell>
                                <TableCell align="center" colSpan={1}>장기요양정산</TableCell>
                                <TableCell align="center" colSpan={1}>고용정산</TableCell>
                                <TableCell align="center" colSpan={1}>주민세</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="center" colSpan={1}>부양가족(본인1)</TableCell>
                                <TableCell align="center" colSpan={1}>1조건</TableCell>
                                <TableCell align="center" colSpan={1}>2조건</TableCell>
                                <TableCell align="center" colSpan={1}>3조건</TableCell>
                                <TableCell align="center" colSpan={1}>4조건</TableCell>
                                <TableCell align="center" colSpan={1}>연차수</TableCell>
                                <TableCell align="center" colSpan={1}>공휴일수</TableCell>
                                <TableCell align="center" colSpan={1}>설계변경필요</TableCell>
                                <TableCell align="center" colSpan={1}>1조건수당</TableCell>
                                <TableCell align="center" colSpan={1}>2조건수당</TableCell>
                                <TableCell align="center" colSpan={1}>3조건수당</TableCell>
                                <TableCell align="center" colSpan={1}>4조건수당</TableCell>
                                <TableCell align="center" colSpan={1}></TableCell>
                                <TableCell align="center" colSpan={1}></TableCell>
                                <TableCell align="center" colSpan={1}></TableCell>
                                <TableCell align="center" colSpan={1}></TableCell>
                                <TableCell align="center" colSpan={1}></TableCell>
                                <TableCell align="center" colSpan={1}></TableCell>
                                <TableCell align="center" colSpan={1}></TableCell>
                                <TableCell align="center" colSpan={1}></TableCell>
                                <TableCell align="center" colSpan={1}>연말정산</TableCell>
                            </TableRow>
                    </TableHead>
                    {/* <TableBody>
                    {tmpPostList.map(tmpPost => 
                        <TableRow key={tmpPost.id}>
                            <TableCell>{tmpPost.title}</TableCell>
                            <TableCell>{tmpPost.content}</TableCell>
                        </TableRow>
                    )}
                    </TableBody> */}
                </Table>
            </TableContainer>
        <Dialog
            open={open}
            onClose={handleClose}
        >
            <DialogTitle>정보 입력하기</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    야간근로, 연장근로, 휴일근로, 휴일연장근로, 주휴시간, 지급총액을 입력해주세요.
                </DialogContentText>
                {inputValueTypeNames.map(inputVal => (
                    <div key={inputValueInfoMap[inputVal].id}>
                        {inputValueInfoMap[inputVal].label}
                        <CustomTextField 
                            placeholder={inputValueInfoMap[inputVal].placeholder}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e, inputValueInfoMap[inputVal].id)}
                        />
                    </div>
                ))}
            </DialogContent>
            <DialogActions>
                <Button variant="outlined" onClick={handleClose}>취소</Button>
                <Button variant="contained">확인</Button>
            </DialogActions>
      </Dialog>
        </div>
    )
}