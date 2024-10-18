import React, { useRef } from 'react';
import { StyleSheet, FlatList, View, TextInput } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, deleteTask } from '@/store/slices/tasksSlice';
import { RootState } from '../store/store';
import { useTheme } from '../theme/useTheme';
import Card from '../components/Card';
import { TaskItem } from '@/components/TaskItem';
import { Button } from '@/components/Button';
import { typeVariants } from '../theme/theme';
import { ThemedView } from '@/components/ThemedView';
import type { Task } from '@/types/task'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useModal } from '@/hooks/modal';
import { CustomModal } from '@/components/Modal';
import { ThemedText } from '@/components/ThemedText';
import { ErrorMessage, Formik } from 'formik';
import { taskSchema } from '@/types/schemas/task';
import { useAlerts } from '@/hooks/alert';

export const TasksScreen = () => {
    const { theme } = useTheme();
    const inputRef = useRef<TextInput>(null);
    const { isOpen, openModal, closeModal } = useModal()
    const taskList = useSelector((state: RootState) => state.tasks.tasks);
    const {showAlertConfirm} = useAlerts()
    const dispatch = useDispatch();

    const addNewTask = (description:string) => {
        let temp = description.trim();
        if (temp !== '') {
            dispatch(addTask({ id: Date.now().toString(), description: temp }));
        }
        inputRef.current?.clear();
        closeModal()
    };

    const onDeleteTask = (t:Task) => {
        showAlertConfirm("Delete task",()=>{
            dispatch(deleteTask(t.id))
        })
    }


    const renderItem = ({ item }: { item: Task; index: number }) => (
        <TaskItem item={item} onPressDelete={onDeleteTask} />
    );

    const keyExtractor = (item: Task) => `task-${item.id}`;

    return (
        <ThemedView>
            <Button testID='Tasks.addBtn' onPress={() => openModal()} style={styles.btnAdd}>
                <ThemedText style={{ color: theme.layoutBg, fontSize: 20 }}>New task</ThemedText>
            </Button>
            <FlatList
                data={taskList}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                contentContainerStyle={styles.flatList}
            />

            <CustomModal title='Create new task' isVisible={isOpen} onClose={() => closeModal()}>
                <Card
                    style={[styles.inputCard, { borderTopColor: theme?.cardBorderColor }]}>
                    <Formik
                        initialValues={{ description: '' }}
                        onSubmit={values => addNewTask(values.description)}
                        validationSchema={taskSchema}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values }) => (
                            <>
                                <View style={styles.inputBtnRow}>
                                    <TextInput
                                        testID="newTaskInput"
                                        ref={inputRef}
                                        placeholder="Insert new Task"
                                        placeholderTextColor={theme?.color}
                                        style={[
                                            styles.input,
                                            typeVariants.bodyMedium,
                                            {
                                                color: theme?.color,
                                                backgroundColor: theme?.layoutBg,
                                                borderColor: theme?.layoutBg,
                                            },
                                        ]}
                                        onChangeText={handleChange('description')}
                                        onBlur={handleBlur('description')}
                                        value={values.description}
                                    />
                                    <Button testID='btnSubmit' onPress={handleSubmit} style={styles.btnAdd}>
                                        <Ionicons name="checkmark-circle-sharp" size={20} color={theme.layoutBg} />
                                    </Button>
                                </View>

                                <ThemedText style={styles.textError}>
                                    <ErrorMessage name="description" />
                                </ThemedText>
                            </>

                        )}
                    </Formik>
            </Card>
        </CustomModal>
        </ThemedView >
    );
};

const styles = StyleSheet.create({
    activityIndicatorContainer: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    flatList: {
        paddingHorizontal: 12,
        paddingVertical: 30,
    },
    tickIcon: {
        width: 22,
        height: 22,
    },
    inputCard: {
        borderTopWidth: StyleSheet.hairlineWidth,
        elevation: 4,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16
    },
    inputBtnRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    inputBtnWrp: {
        flexDirection: 'row',
        flex: 1,
    },
    input: {
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#f0f0f0',
        flex: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        fontSize: 14,
        height: 45,
        backgroundColor: '#f6f6f6',
    },
    btnAdd: {
        borderRadius: 5,
        padding: 6,
        flex: 0.1,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        height: 50,
        marginLeft: 5,
    },
    btnAddText: {
        color: '#fff',
        fontSize: 14,
    },
    btnClear: {
        borderRadius: 2,
        paddingVertical: 5,
        paddingHorizontal: 5,
        justifyContent: 'center',
        alignItems: 'center',
        // borderWidth: StyleSheet.hairlineWidth,
        // borderColor: '#c50e29',
        marginRight: 8,
    },
    btnClearText: {
        color: '#c50e29',
        fontSize: 14,
    },
    textError:{
        color:"red",
        marginTop:3
    }
});
