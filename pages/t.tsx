import * as React from 'react';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

// function not(a: readonly number[], b: readonly number[]) {
//     return a.filter((value) => b.indexOf(value) === -1);
// }

// function intersection(a: readonly number[], b: readonly number[]) {
//     return a.filter((value) => b.indexOf(value) !== -1);
// }

// function union(a: readonly number[], b: readonly number[]) {
//     return [...a, ...not(b, a)];
// }

export default function SelectAllTransferList() {
    // const [checked, setChecked] = React.useState<readonly number[]>([]);
    // const [left, setLeft] = React.useState<readonly number[]>([0, 1, 2, 3,4, 5, 6, 7]);
    // // const [right, setRight] = React.useState<readonly number[]>([4, 5, 6, 7]);

    // const handleToggle = (value: number) => () => {
    //     const currentIndex = checked.indexOf(value);
    //     const newChecked = [...checked];

    //     if (currentIndex === -1) {
    //         newChecked.push(value);
    //     } else {
    //         newChecked.splice(currentIndex, 1);
    //     }

    //     setChecked(newChecked);
    // };

    // const numberOfChecked = (items: readonly number[]) =>
    //     intersection(checked, items).length;

    // const handleToggleAll = (items: readonly number[]) => () => {
    //     if (numberOfChecked(items) === items.length) {
    //         setChecked(not(checked, items));
    //     } else {
    //         setChecked(union(checked, items));
    //     }
    // };
    // const customList = (title: React.ReactNode, items: readonly number[]) => (
    //     <Card>
    //         <CardHeader
    //             sx={{ px: 2, py: 1 }}
    //             avatar={
    //                 <Checkbox
    //                     onClick={handleToggleAll(items)}
    //                     checked={numberOfChecked(items) === items.length && items.length !== 0}
    //                     indeterminate={
    //                         numberOfChecked(items) !== items.length && numberOfChecked(items) !== 0
    //                     }
    //                     disabled={items.length === 0}
    //                     inputProps={{
    //                         'aria-label': 'all items selected',
    //                     }}
    //                 />
    //             }
    //             title={title}
    //             subheader={`${numberOfChecked(items)}/${items.length} selected`}
    //         />
    //         <Divider />
    //         <List
    //             sx={{
    //                 width: 200,
    //                 height: 230,
    //                 bgcolor: 'background.paper',
    //                 overflow: 'auto',
    //             }}
    //             dense
    //             component="div"
    //             role="list"
    //         >
    //             {items.map((value: number) => {
    //                 const labelId = `transfer-list-all-item-${value}-label`;

    //                 return (
    //                     <ListItem
    //                         key={value}
    //                         role="listitem"
    //                         button
    //                         onClick={handleToggle(value)}
    //                     >
    //                         <ListItemIcon>
    //                             <Checkbox
    //                                 checked={checked.indexOf(value) !== -1}
    //                                 tabIndex={-1}
    //                                 disableRipple
    //                                 inputProps={{
    //                                     'aria-labelledby': labelId,
    //                                 }}
    //                             />
    //                         </ListItemIcon>
    //                         <ListItemText id={labelId} primary={`List item ${value + 1}`} />
    //                     </ListItem>
    //                 );
    //             })}
    //         </List>
    //     </Card>
    // );

    return (

        <div>
            <form id="form" className='flex flex-col space-y-4'>
                <input type="text"  className='bg-gray-100 w-96' required />
                <input type="email" className='bg-gray-100 w-96' required />
                <input type="tel" className='bg-gray-100 w-96' pattern="[\+]\d{2}[\(]\d{2}[\)]\d{4}[\-]\d{4}"
                    title="Phone Number format is +99(99)9999-9999" required />
                <input type="password" className='bg-gray-100 w-96' pattern="(?=.*[a-z]).{6}"
                    title="Must be 6 characters or more and 
                    contain at least 1 lower case letter" required />
            </form>
        </div>
        // <Grid container spacing={2} justifyContent="center" alignItems="center">
        //     <Grid item>{customList('Loại phim', left)}</Grid>

        // </Grid>
    );
}