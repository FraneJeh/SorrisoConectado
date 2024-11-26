import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native'; // Para acessar os parâmetros passados pela navegação

export default function AgendaMaria() {
  const route = useRoute();
  const { name, profession } = route.params; // Pegando os parâmetros passados (nome e profissão)

  const Calendar = () => {
    const [selectedTime, setSelectedTime] = useState(null);
    const [currentWeekIndex, setCurrentWeekIndex] = useState(0);

    const days = [
      { day: "Seg", date: "20 Out" },
      { day: "Ter", date: "21 Out" },
      { day: "Qua", date: "22 Out" },
      { day: "Qui", date: "23 Out" },
      { day: "Sex", date: "24 Out" },
      { day: "Sáb", date: "25 Out" },
    ];

    const bookedTimes = [''];

    const handleTimePress = (time) => {
      if (!bookedTimes.includes(time)) {
        setSelectedTime(time);
      }
    };

    const handleNext = () => {
      setCurrentWeekIndex((prevIndex) => Math.min(prevIndex + 3, days.length - 3));
    };

    const handlePrevious = () => {
      setCurrentWeekIndex((prevIndex) => Math.max(prevIndex - 3, 0));
    };

    return (
      <View style={styles.calendar}>
        <View style={styles.calendarHeader}>
          <Text style={styles.calendarHeaderText}>Calendário</Text>
        </View>
        <Text style={styles.calendarDoctorText}>{name}</Text>
        <Text style={styles.calendarDoctorText}>{profession}</Text>
        <View style={styles.calendarTable}>
          <View style={styles.tabs}>
            <TouchableOpacity onPress={handlePrevious} style={styles.tabButtonText}>
              <FontAwesome name="chevron-left" size={20} color="#333" />
            </TouchableOpacity>

            {days.slice(currentWeekIndex, currentWeekIndex + 3).map((day) => (
              <View key={day.date} style={styles.calendarTableCellText}>
                <Text style={styles.calendarTableCellText}>{day.day}</Text>
                <Text style={styles.calendarTableCellText}>{day.date}</Text>
                {['08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30'].map((time) => {
                  const isBooked = bookedTimes.includes(time);
                  return (
                    <TouchableOpacity
                      key={time}
                      style={[
                        styles.calendarTableCell,
                        styles.timeButton,
                        isBooked && styles.bookedTimeButton
                      ]}
                      onPress={() => handleTimePress(time)}
                      disabled={isBooked}>
                      <Text style={[styles.tabButton, isBooked && styles.bookedTimeText]}>
                        {time}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            ))}

            <TouchableOpacity onPress={handleNext} style={styles.tabButtonText}>
              <FontAwesome name="chevron-right" size={20} color="#333" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <Calendar />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  calendarHeaderText: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 19,
    marginLeft: 15,
  },
  tabButton: {
    padding: 9,
    backgroundColor: '#D4F0F1',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 20,
    textAlign: 'center',
  },
  tabButtonText: {
    fontSize: 16,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 29,
    padding: 5,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  calendarDoctorText: {
    marginLeft: 15,
    fontSize: 16,
    fontWeight: 'bold',
  },
  calendarTableCellText: {
    alignItems: 'center',
    marginVertical: 1,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  timeButton: {
    padding: 9,
    marginVertical: 4,
  },
  bookedTimeButton: {
    backgroundColor: '#c1c1c1',
  },
  bookedTimeText: {
    color: '#7f7f7f',
  },
  calendarTableCell: {
    width: 60,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
