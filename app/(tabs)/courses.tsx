import {View, Text, StyleSheet,SafeAreaView,ScrollView} from 'react-native';
import Card from '@/components/Card';


const Courses: React.FC =()=>{
    const handleCourses=()=>{
        console.count('clicked');
    }
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Card title="Start Your Journey: Beginner Basics" description="Dive into the world of language learning with essential greetings, numbers and colors" onPress={handleCourses} image='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2ec303ef-847a-4057-ad2e-a6704a8c03db/dd6nuu2-b1fed736-724a-49e3-90aa-5af09e7a608a.png/v1/fill/w_1024,h_576,q_80,strp/tree_near_water_fall_by_umbatman_dd6nuu2-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc2IiwicGF0aCI6IlwvZlwvMmVjMzAzZWYtODQ3YS00MDU3LWFkMmUtYTY3MDRhOGMwM2RiXC9kZDZudXUyLWIxZmVkNzM2LTcyNGEtNDllMy05MGFhLTVhZjA5ZTdhNjA4YS5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.-60Hzmyopqdk4vPT1ll0Cw07r3TU3ILqGgG2q-DLvpI'/>
                <Card title="Expand Your Horizons: Intermediate Skills" description="Intermediate grammar, vocabulary, and conversation topics."onPress={handleCourses} image='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/095b362d-6c4d-4adf-9498-3d8d07222a75/d9h75qt-e2b1cf8f-1988-40b3-8345-afa5916d2974.jpg/v1/fill/w_1024,h_492,q_75,strp/zems___main_menu_war_table_by_deivcalviz_d9h75qt-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDkyIiwicGF0aCI6IlwvZlwvMDk1YjM2MmQtNmM0ZC00YWRmLTk0OTgtM2Q4ZDA3MjIyYTc1XC9kOWg3NXF0LWUyYjFjZjhmLTE5ODgtNDBiMy04MzQ1LWFmYTU5MTZkMjk3NC5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.O-rqlabrp-AWQvpQ46TUEFGOrFDvdzcmt_Y1MKzgQBU'/>
                <Card title="Master the Language: Fluency" description="Focus on advanced grammar, idiomatic expressions, and cultural nuances."onPress={handleCourses} image='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f03f3ac4-ad08-471b-b6b5-f7a77aafe26b/dfvsy26-70039ab1-9702-4ddf-961f-d4d8498356af.png/v1/fit/w_828,h_464,q_70,strp/whispers_of_the_enchanted_tree_library_by_misconceptionaiart_dfvsy26-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2YwM2YzYWM0LWFkMDgtNDcxYi1iNmI1LWY3YTc3YWFmZTI2YlwvZGZ2c3kyNi03MDAzOWFiMS05NzAyLTRkZGYtOTYxZi1kNGQ4NDk4MzU2YWYucG5nIiwiaGVpZ2h0IjoiPD03MTgiLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS53YXRlcm1hcmsiXSwid21rIjp7InBhdGgiOiJcL3dtXC9mMDNmM2FjNC1hZDA4LTQ3MWItYjZiNS1mN2E3N2FhZmUyNmJcL21pc2NvbmNlcHRpb25haWFydC00LnBuZyIsIm9wYWNpdHkiOjk1LCJwcm9wb3J0aW9ucyI6MC40NSwiZ3Jhdml0eSI6ImNlbnRlciJ9fQ.gR0UTHi5p07ALTbKBnHTrr_LR6ZdxTC3RiUfLaWgwTc'/>
                
            </ScrollView>
        </SafeAreaView>
    );
};

const styles =StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
   

});
export default Courses;